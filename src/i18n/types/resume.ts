import { ElementType, ReactElement } from 'react';

type Social = {
  name: string;
  url: string;
  icon: ElementType;
  navbar: boolean;
};

type Contact = {
  email: string;
  tel: string;
  social: Record<string, Social>;
};

type NavbarItem = {
  href: string;
  icon: ElementType;
  label: string;
};

type WorkExperience = {
  company: string;
  href?: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  links: {
    type: string;
    href: string;
    icon: ReactElement;
  }[];
  description: ReactElement;
};

type EducationItem = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: {
    type: string;
    href: string;
    icon: ReactElement;
  }[];
  image: string;
  video: string;
};

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  mlh?: string;
  win?: string;
  icon?: string;
  links: {
    title: string;
    icon: ReactElement;
    href: string;
  }[];
};

export type ResumeDict = {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: NavbarItem[];
  contact: Contact;
  work: WorkExperience[];
  education: EducationItem[];
  projects: Project[];
  hackathons: Hackathon[];
};
