import Link from 'next/link';

import { BlurFade } from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/constants';
import { DATA } from '@/data/resume';

export function ContactSection() {
  return (
    <section id="contact">
      <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
              Contato
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Entre em Contato
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Quer conversar? Basta me enviar uma mensagem no{' '}
              <Link
                href={DATA.contact.social.LinkedIn.url}
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </Link>{' '}
              e eu responderei assim que puder. Também estou disponível no
              e-mail{' '}
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="text-blue-500 hover:underline"
              >
                {DATA.contact.email}
              </Link>
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
