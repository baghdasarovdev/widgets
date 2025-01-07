import { type AuthOptions, type User } from 'next-auth';
import { type JWT } from 'next-auth/jwt';
import ZitadelProvider from 'next-auth/providers/zitadel';
import { Issuer } from 'openid-client';

interface ExtendedJWT extends JWT {
  refreshToken?: string;
  accessToken?: string;
  expiresAt?: number;
  user?: User & {
    username: string;
    profile: {
      givenName: string;
      familyName: string;
      nickname: string;
      displayName: string;
      gender: string;
      avatar: string;
    };
    email: string;

    id: string;
  };
}

const zitadelScopes = [
  'openid',
  'email',
  'profile',
  'address',
  'offline_access',
  'account',
  'picture',
  'urn:zitadel:iam:org:project:id:zitadel:aud',
  'urn:zitadel:iam:org:project:id:294454561857352531:aud',
  'urn:zitadel:iam:user:resourceowner:org',
  'urn:zitadel:iam:org:projects:roles',
  'urn:zitadel:iam:user:metadata',
].join(' ');

async function refreshAccessToken(token: ExtendedJWT): Promise<ExtendedJWT> {
  try {
    const issuer = await Issuer.discover(process.env.ZITADEL_ISSUER ?? '');
    const client = new issuer.Client({
      client_id: process.env.ZITADEL_CLIENT_ID || '',
      client_secret: process.env.ZITADEL_CLIENT_SECRET,
      token_endpoint_auth_method: 'client_secret_basic',
    });

    const { refresh_token, access_token, expires_at } = await client.refresh(
      token.refreshToken as string,
    );

    return {
      ...token,
      accessToken: access_token,
      expiresAt: (expires_at ?? 0) * 1000,
      refreshToken: refresh_token,
    };
  } catch (error) {
    console.error('Error during refreshAccessToken', error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    ZitadelProvider({
      issuer: process.env.ZITADEL_ISSUER,
      clientId: process.env.ZITADEL_CLIENT_ID || '',
      clientSecret: process.env.ZITADEL_CLIENT_SECRET || '',
      authorization: {
        params: {
          scope: zitadelScopes,
        },
      },
      async profile(profile) {
        return {
          username: profile.preferred_username,
          profile: {
            givenName: profile.given_name,
            familyName: profile.family_name,
            nickname: profile.nickname,
            displayName: profile.name,
            gender: profile.gender,
            avatar: profile.picture,
          },
          email: profile.email,
          id: profile.sub,
        } as unknown as User;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, profile, account }) {
      if (user) {
        token.user = user;
      }

      token.accessToken ??= account?.access_token;
      token.refreshToken ??= account?.refresh_token;
      token.expiresAt ??= (account?.expires_at ?? 0) * 1000;
      token.role ??=
        profile?.[
          `urn:zitadel:iam:org:project:${process.env.ZITADEL_PROJECT_ID}:roles` as keyof typeof profile
        ];

      token.error = undefined;
      if (Date.now() < (token.expiresAt as number)) {
        return token;
      }

      return refreshAccessToken(token);
    },

    async session({ session, token }: { session: any; token: ExtendedJWT }) {
      if (token.user) {
        session.user = {
          ...token.user,
          token: token.accessToken,
          roles: token.role ? Object.keys(token.role) : null,
        };
      }
      session.clientId = process.env.ZITADEL_CLIENT_ID;
      session.error = token.error;

      return session;
    },
  },
};
