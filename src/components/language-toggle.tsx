'use client';

import { usePathname, useRouter } from 'next/navigation';

import { type Locale, locales } from '@/i18n/config';

import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

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
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLanguageSwitch}
          aria-label={
            isPortuguese ? 'Switch to English' : 'Mudar para Português'
          }
        >
          <span
            className="text-lg"
            role="img"
            aria-label={isPortuguese ? 'Brasil' : 'Estados Unidos'}
          >
            {isPortuguese ? '🇧🇷' : '🇺🇸'}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isPortuguese ? 'English' : 'Português'}</p>
      </TooltipContent>
    </Tooltip>
  );
}
