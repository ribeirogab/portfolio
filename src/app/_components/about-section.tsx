import Markdown from 'react-markdown';

import { BlurFade } from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/constants';
import { DATA } from '@/data/resume';

export function AboutSection() {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">Sobre</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}
