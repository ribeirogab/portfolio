import { AboutSection } from './_components/about-section';
import { ContactSection } from './_components/contact-section';
import { EducationSection } from './_components/education-section';
import { HeroSection } from './_components/hero-section';
import { SkillsSection } from './_components/skills-section';
import { WorkSection } from './_components/work-section';

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
