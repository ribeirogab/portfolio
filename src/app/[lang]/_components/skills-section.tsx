import { BlurFade } from '@/components/magicui/blur-fade';
import { Badge } from '@/components/ui/badge';
import { BLUR_FADE_DELAY } from '@/constants';
import type { Dictionary } from '@/i18n';

type SkillsSectionProps = {
  dict: Dictionary;
};

export function SkillsSection({ dict }: SkillsSectionProps) {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">{dict.ui.skills.title}</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {dict.resume.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
