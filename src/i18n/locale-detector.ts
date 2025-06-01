import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';

import { defaultLocale, type Locale, locales } from './config';

export function getLocale(request: NextRequest): Locale {
  // Get the preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const headers = { 'accept-language': acceptLanguage };
  const languages = new Negotiator({ headers }).languages();

  try {
    return match(languages, locales, defaultLocale) as Locale;
  } catch {
    return defaultLocale;
  }
}

export function hasLocaleInPathname(pathname: string): boolean {
  return locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
}
