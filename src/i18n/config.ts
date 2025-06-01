export const locales = ['en', 'pt'] as const;
export const defaultLocale = 'pt' as const;

export type Locale = (typeof locales)[number];

// Middleware configuration
export const i18nConfig = {
  locales,
  defaultLocale,
  // Matcher pattern for middleware
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
} as const;
