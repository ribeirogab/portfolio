import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

import { Icons } from '@/components/icons';

import { Dictionary } from '../types/dictionary';

export const en: Dictionary = {
  resume: {
    name: 'Gabriel Ribeiro',
    jobTitle: 'Software Engineer',
    initials: 'GR',
    url: 'https://gabrielribeiro.work',
    location: 'Tatuí - SP, Brazil',
    locationLink: 'https://g.co/kgs/sTbLmGm',
    description:
      'Software Engineer. I write code, launch projects, and automate everything I can.',
    summary:
      'Specialized in backend with experience in designing and building scalable, high-performance systems across different domains. Currently working at Goomer and running a software consultancy since 2025, delivering solutions for simple and complex projects. Experienced with serverless architectures, subscription integrations, and event-driven systems. Enthusiast of automation, AI, and software engineering best practices.',
    avatarUrl: '/me.jpeg',
    skills: [
      'Node.js',
      'TypeScript',
      'AWS',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'DynamoDB',
      'Docker',
      'NestJS',
      'React',
      'Next.js',
      'Cloudflare',
      'PHP',
    ],
    navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
    contact: {
      email: 'ribeirogab.dev@gmail.com',
      tel: '+5515991164345',
      social: {
        GitHub: {
          name: 'GitHub',
          url: 'https://github.com/ribeirogab',
          icon: Icons.github,
          navbar: true,
        },
        LinkedIn: {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/ribeirogab/',
          icon: Icons.linkedin,
          navbar: true,
        },
        X: {
          name: 'X',
          url: 'https://x.com/gbr_osr',
          icon: Icons.x,
          navbar: true,
        },
        Youtube: {
          name: 'Youtube',
          url: 'https://www.youtube.com/@ribeirogab',
          icon: Icons.youtube,
          navbar: false,
        },
        email: {
          name: 'Send Email',
          url: '#',
          icon: Icons.email,
          navbar: false,
        },
      },
    },
    work: [
      {
        company: 'Goomer',
        badges: [],
        location: 'Remote',
        title: 'Software Engineer',
        logoUrl: '/goomer.jpeg',
        start: 'Aug 2021',
        end: 'Present',
        links: [
          {
            type: 'Website',
            href: 'https://goomer.com.br/',
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: 'LinkedIn',
            href: 'https://www.linkedin.com/company/goomer/',
            icon: <Icons.linkedin className="size-3" />,
          },
          {
            type: 'GitHub',
            href: 'https://github.com/goomerdev',
            icon: <Icons.github className="size-3" />,
          },
        ],
        description: (
          <div className="flex flex-col gap-2">
            <p>
              I am one of the key focal points of the company's backend team,
              leading technical decisions and actively contributing to product
              definitions. I was one of the main responsible for the merger
              between Goomer and Abrahão systems, focusing on unifying
              authentication, subscription, and user management flows. I acted
              as a technical reference in these initiatives, ensuring alignment
              between teams and architecture integrity.
            </p>
            <p>
              My responsibilities include developing and maintaining scalable
              microservices, optimizing relational and non-relational databases,
              and creating well-documented REST APIs. I also actively
              participate in legacy system refactoring, promoting modern
              patterns and improving performance and maintainability.
            </p>
            <p>
              Additionally, I collaborated on internal AI initiatives focused on
              process automation, aiming to increase the engineering team's
              efficiency.
            </p>
          </div>
        ),
      },
      {
        company: 'Zunix',
        badges: [],
        location: 'Remote',
        title: 'CTO',
        logoUrl: '/zunix.png',
        start: 'Jan 2025',
        end: 'Present',
        links: [],
        description: (
          <div className="flex flex-col gap-2">
            <p>
              I act as the technical leader for my software consultancy,
              conducting the entire project lifecycle — from understanding
              client needs to production deployment. I participate in strategic
              meetings, identify real business pain points, and propose
              efficient, scalable solutions aligned with client objectives.
            </p>
            <p>
              I am responsible for all technical stages: architecture,
              development, testing, documentation, and maintenance of delivered
              systems. I also contribute to scope definition and budgeting,
              ensuring technical feasibility and clarity in deliverables.
            </p>
          </div>
        ),
      },
      {
        company: 'iClouds',
        badges: [],
        location: 'Remote',
        title: 'Software Engineer',
        logoUrl: '/iclouds.jpeg',
        start: 'Jul 2020',
        end: 'Aug 2021',
        links: [
          {
            type: 'LinkedIn',
            href: 'https://www.linkedin.com/company/iclouds-sw/',
            icon: <Icons.linkedin className="size-3" />,
          },
        ],
        description: (
          <div className="flex flex-col gap-2">
            <p>
              I worked with a focus on backend, being responsible for building
              and maintaining the company's main APIs. I also worked on frontend
              projects using React, Next.js, and React Native, delivering modern
              interfaces well integrated with the platform services.
            </p>
            <p>
              I implemented unit tests with TDD, organized project architecture
              following principles like DDD, SOLID, and clean code, and
              participated in managing relational (PostgreSQL) and
              non-relational (MongoDB) databases. Additionally, I contributed to
              project standardization and team task organization.
            </p>
            <p>
              This experience gave me a solid foundation in web development,
              both backend and frontend, and expanded my vision of best
              practices and software organization in real production
              environments.
            </p>
          </div>
        ),
      },
      {
        company: 'Makertech Labs',
        badges: [],
        location: 'Santa Clara, CA',
        title: 'IT Technician',
        logoUrl: '/makertechlabs.jpeg',
        start: 'Aug 2018',
        end: 'Oct 2019',
        links: [
          {
            type: 'Website',
            href: 'https://www.makertechlabs.com.br/',
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: 'LinkedIn',
            href: 'https://www.linkedin.com/company/makertech-labs/',
            icon: <Icons.linkedin className="size-3" />,
          },
        ],
        description: (
          <div className="flex flex-col gap-2">
            <p>
              I worked as an IT technician, being responsible for activities
              that integrated technology, design, and digital marketing. I
              developed and managed the company's institutional website, in
              addition to controlling and maintaining computers used in the
              corporate environment.
            </p>
            <p>
              I actively contributed to creating graphic materials such as
              banners, folders, and displays, using tools like Photoshop, Canva,
              and CorelDRAW. I was also responsible for creating and managing
              Google Ads campaigns and managing the company's social media,
              aligning visual communication with the brand's strategic
              objectives.
            </p>
          </div>
        ),
      },
    ],
    education: [
      {
        school: 'FIAP',
        href: 'https://www.fiap.com.br/',
        degree: 'Bachelor in Artificial Intelligence',
        logoUrl: '/fiap.png',
        start: 'Aug 2024',
        end: 'Present',
      },
      {
        school: 'Fatec Prof. Antonio Belizandro Barbosa Rezende',
        href: 'https://fatecitapetininga.edu.br/',
        degree: 'Bachelor in Systems Analysis and Development',
        logoUrl: '/fatec.png',
        start: 'Aug 2019',
        end: 'Aug 2021',
      },
      {
        school: 'Etec Sales Gomes',
        href: 'https://etecsalesgomes.cps.sp.gov.br/',
        degree: 'Technical in Internet Computing',
        logoUrl: '/etec.png',
        start: 'Feb 2018',
        end: 'Jul 2019',
      },
    ],
    projects: [],
    hackathons: [],
  },
  ui: {
    // Sections
    hero: {
      greeting: "Hi, I'm",
    },

    about: {
      title: 'About',
    },

    work: {
      title: 'Work Experience',
    },

    education: {
      title: 'Education',
    },

    skills: {
      title: 'Skills',
    },

    projects: {
      title: 'My Projects',
      subtitle: 'Check out my latest work',
      description:
        "I've worked on a variety of projects, from simple websites to complex web applications.",
    },

    contact: {
      title: 'Get in Touch',
      badge: 'Contact',
      description: (dict: Dictionary) => (
        <>
          Want to chat? Just send me a message on{' '}
          <Link
            href={dict.resume.contact.social.LinkedIn.url}
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </Link>{' '}
          and I'll get back to you as soon as possible. I'm also available via
          email at{' '}
          <Link
            href={`mailto:${dict.resume.contact.email}`}
            className="text-blue-500 hover:underline"
          >
            {dict.resume.contact.email}
          </Link>
        </>
      ),
    },

    text: {
      'view more': 'View more',
      'view less': 'View less',
      present: 'Present',
      location: 'Location',
      home: 'Home',
      'switch language': 'Switch language',
      'switch theme': 'Switch theme',
    },
  },
};
