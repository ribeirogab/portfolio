import type { ReactNode } from "react";

export type WorkEntry = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
};

export type EducationEntry = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

export type ProjectEntry = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: ReactNode }[];
  image: string;
  video: string;
};

export type Dictionary = {
  resume: {
    description: string;
    summary: string;
    work: WorkEntry[];
    education: EducationEntry[];
    projects: ProjectEntry[];
  };
  ui: {
    hero: { greeting: string };
    about: { title: string };
    work: { title: string };
    education: { title: string };
    skills: { title: string };
    projects: {
      badge: string;
      title: string;
      description: string;
      viewAll: string;
      pageTitle: string;
      pageDescription: string;
    };
    contact: {
      badge: string;
      title: string;
      description: string;
    };
    blog: {
      title: string;
      description: string;
      noPosts: string;
      page: string;
      of: string;
      previous: string;
      next: string;
      backToBlog: string;
      posts: string;
    };
    notFound: {
      title: string;
      description: string;
      goHome: string;
    };
  };
};
