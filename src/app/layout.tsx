/* eslint-disable absolute-imports/only-absolute-imports */
/* eslint-disable simple-import-sort/imports */
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { cn } from '@/helper';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { NextAuthProvider } from '@/providers/SessionProvider';

import '@/app/main.css';

import Logo from '../../public/logo/logo.png';

const lato = Lato({
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  icons: Logo.src,
  title: 'Holiday Lettings, Rentals, Apartments and Cottages directly by owner',
  description:
    '150.000 Holiday Lettings, Holiday Rentals, Apartments and B&amp;B directly by owner - worldwide. Book directly with owner without any fees.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextAuthProvider>
        <body
          className={cn(lato.className, 'overflow-x-hidden text-text-default')}
        >
          <ReduxProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ReduxProvider>
        </body>
      </NextAuthProvider>
    </html>
  );
}
