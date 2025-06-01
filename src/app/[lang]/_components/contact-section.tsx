import { BlurFade } from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/constants';
import type { Dictionary } from '@/i18n';

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
              {dict.ui.contact.badge}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {dict.ui.contact.title}
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dict.ui.contact.description(dict)}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
