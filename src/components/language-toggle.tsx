'use client';

import { usePathname, useRouter } from 'next/navigation';

import { type Locale, locales } from '@/i18n/config';

import { Button } from './ui/button';

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split('/')[1] as Locale;
  const isPortuguese = currentLang === 'pt';

  const handleLanguageSwitch = () => {
    const segments = pathname.split('/');

    if (locales.includes(segments[1] as Locale)) {
      segments[1] = isPortuguese ? 'en' : 'pt';
    } else {
      segments.unshift('', isPortuguese ? 'en' : 'pt');
    }

    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleLanguageSwitch}
      aria-label={isPortuguese ? 'Switch to English' : 'Mudar para Português'}
      className="bg-background/35"
    >
      <span className="text-sm">{isPortuguese ? 'pt' : 'en'}</span>
    </Button>
  );
}
