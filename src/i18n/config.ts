export const locales = ['en', 'pt'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];
