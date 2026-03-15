import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import type { Dictionary } from "@/i18n/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;
const MAX_PROJECTS_HOME = 4;

export default function ProjectsSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const projects = dict.resume.projects.slice(0, MAX_PROJECTS_HOME);
  const hasMore = dict.resume.projects.length > MAX_PROJECTS_HOME;

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                {dict.ui.projects.badge}
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {dict.ui.projects.title}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              {dict.ui.projects.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
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
        {hasMore && (
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex justify-center">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {dict.ui.projects.viewAll}
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
