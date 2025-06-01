import { getDictionary, type Locale } from '@/lib/dictionaries';

import { AboutSection } from './_components/about-section';
import { ContactSection } from './_components/contact-section';
import { EducationSection } from './_components/education-section';
import { HeroSection } from './_components/hero-section';
import { SkillsSection } from './_components/skills-section';
import { WorkSection } from './_components/work-section';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <HeroSection dict={dict} />
      <AboutSection dict={dict} />
      <WorkSection dict={dict} />
      <EducationSection dict={dict} />
      <SkillsSection dict={dict} />
      <ContactSection dict={dict} />
    </main>
  );
}
