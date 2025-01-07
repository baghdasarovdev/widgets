import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const url = new URL(request.url);

  if (url.pathname === '/') {
    return NextResponse.redirect(new URL('/hosting', request.url));
  }

  const response = NextResponse.rewrite(url.toString());
  const cookieStore = cookies();
  const cookie = cookieStore.get('NEXT_LOCALE');

  const locale = (cookie?.value || 'de') as string;

  response.cookies.set('NEXT_LOCALE', locale, { path: '/' });

  response.headers.set('x-your-custom-locale', locale);

  return response;
}

export const config = {
  matcher: '/(.*)',
};
