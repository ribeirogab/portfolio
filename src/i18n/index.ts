import 'server-only';

import { en } from './dictionaries/en';
import { pt } from './dictionaries/pt';

const dictionaries = {
  pt: () => Promise.resolve(pt),
  en: () => Promise.resolve(en),
} as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof pt;

export const getDictionary = async (locale: Locale) => {
  if (!(locale in dictionaries)) {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }
  return dictionaries[locale]();
};

export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = 'pt';
