import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
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
      token: string;
    };
  }
}
