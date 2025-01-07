import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.tsx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { hostname: 'nextapp-hjalo3.us1.zitadel.cloud' },
      { hostname: 'login.resido.info' },
    ],
  },
};

export default withNextIntl(nextConfig);
