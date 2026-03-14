import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.ui.projects.pageTitle,
    description: dict.ui.projects.pageDescription,
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href={`/${locale}`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-8 group"
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Home
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-y-2 mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            {dict.ui.projects.pageTitle}
          </h1>
          <p className="text-sm text-muted-foreground">
            {dict.ui.projects.pageDescription}
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
        {dict.resume.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 3 + id * 0.05}
            className="h-full"
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
