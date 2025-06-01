'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { type Locale } from '@/lib/dictionaries';

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLang = params.lang as Locale;

  const switchLanguage = () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPathname);
  };

  return (
    <Button variant="ghost" type="button" size="icon" onClick={switchLanguage}>
      <span className="text-sm font-medium">
        {currentLang === 'pt' ? '🇧🇷' : '🇺🇸'}
      </span>
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
