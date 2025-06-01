import { BlurFade } from '@/components/magicui/blur-fade';
import { BlurFadeText } from '@/components/magicui/blur-fade-text';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Avatar } from '@/components/ui/avatar';
import { BLUR_FADE_DELAY } from '@/constants';
import { DATA } from '@/data/resume';
import { type Dictionary } from '@/i18n';

type HeroSectionProps = {
  dict: Dictionary;
};

export function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex justify-between gap-2">
          <div className="flex flex-1 flex-col space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`${dict.ui.hero.greeting} ${DATA.name.split(' ')[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={dict.ui.hero.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
