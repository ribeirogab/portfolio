import 'server-only';

const dictionaries = {
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
} as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = Awaited<ReturnType<typeof dictionaries.pt>>;

export const getDictionary = async (locale: Locale) => {
  if (!(locale in dictionaries)) {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }
  return dictionaries[locale]();
};

export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = 'pt';
