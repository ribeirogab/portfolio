import { BlurFade } from '@/components/magicui/blur-fade';
import { ResumeCard } from '@/components/resume-card';
import { BLUR_FADE_DELAY } from '@/constants';
import { DATA } from '@/data/resume';
import { type Dictionary } from '@/lib/dictionaries';

type WorkSectionProps = {
  dict: Dictionary;
};

export function WorkSection({ dict }: WorkSectionProps) {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">{dict.work.title}</h2>
        </BlurFade>
        {DATA.work.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? dict.common.present}`}
              description={work.description}
              links={work.links}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
