import 'server-only';

import type { Locale } from './config';
import { en } from './dictionaries/en';
import { pt } from './dictionaries/pt';
import type { Dictionary } from './types/dictionary';

const dictionaries = {
  pt: () => Promise.resolve(pt),
  en: () => Promise.resolve(en),
} as const;

export type { Dictionary };

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  if (!(locale in dictionaries)) {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }

  return dictionaries[locale]();
};
