import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get('NEXT_LOCALE');

  const locale = (cookie?.value || 'de') as string;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
