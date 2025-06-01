import Link from 'next/link';

import { BlurFade } from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/constants';
import { DATA } from '@/data/resume';
import { type Dictionary } from '@/i18n';

type ContactSectionProps = {
  dict: Dictionary;
};

export function ContactSection({ dict }: ContactSectionProps) {
  return (
    <section id="contact">
      <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
              {dict.contact.title}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {dict.contact.title}
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dict.contact.description}
            </p>
            <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {dict.contact.actions.email}
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
