import { NextRequest, NextResponse } from 'next/server';

import { getLocale, hasLocaleInPathname } from './i18n/locale-detector';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files that should not be redirected
  if (['/robots.txt', '/sitemap.xml'].includes(pathname)) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = hasLocaleInPathname(pathname);

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
