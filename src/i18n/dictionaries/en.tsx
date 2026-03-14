import { Icons } from "@/components/icons";
import type { Dictionary } from "../types";

const en: Dictionary = {
  resume: {
    description:
      "Software Engineer. I write code, launch projects, and automate everything I can.",
    summary:
      "Specialized in backend with experience in designing and building scalable, high-performance systems across different domains. Currently working at [Goomer](https://goomer.com.br/) and running a software consultancy ([Zunix](/#work)) since 2025, delivering solutions for simple and complex projects. Experienced with serverless architectures, subscription integrations, and event-driven systems. Enthusiast of automation, AI, and software engineering best practices.",
    work: [
      {
        company: "Goomer",
        href: "https://goomer.com.br/",
        badges: [],
        location: "Remote",
        title: "Software Engineer",
        logoUrl: "/goomer.jpeg",
        start: "Aug 2021",
        end: "Present",
        description:
          "Key focal point of the backend team, leading technical decisions and actively contributing to product definitions. Led the merger between Goomer and Abrahão systems, focusing on unifying authentication, subscription, and user management flows. Develops and maintains scalable microservices, optimizes databases, creates well-documented REST APIs, and participates in legacy system refactoring. Collaborated on internal AI initiatives focused on process automation.",
      },
      {
        company: "Zunix",
        href: "#",
        badges: [],
        location: "Remote",
        title: "CTO",
        logoUrl: "/zunix.png",
        start: "Jan 2025",
        end: "Present",
        description:
          "Technical leader for a software consultancy, managing the entire project lifecycle — from understanding client needs to production deployment. Participates in strategic meetings, identifies real business pain points, and proposes efficient, scalable solutions. Responsible for architecture, development, testing, documentation, and maintenance of delivered systems.",
      },
      {
        company: "iClouds",
        href: "#",
        badges: [],
        location: "Remote",
        title: "Software Engineer",
        logoUrl: "/iclouds.jpeg",
        start: "Jul 2020",
        end: "Aug 2021",
        description:
          "Focused on backend, building and maintaining the company's main APIs. Also worked on frontend projects using React, Next.js, and React Native. Implemented unit tests with TDD, organized architecture following DDD, SOLID, and clean code principles, and managed relational (PostgreSQL) and non-relational (MongoDB) databases.",
      },
      {
        company: "Makertech Labs",
        href: "https://www.makertechlabs.com.br/",
        badges: [],
        location: "Santa Clara, CA",
        title: "IT Technician",
        logoUrl: "/makertechlabs.jpeg",
        start: "Aug 2018",
        end: "Oct 2019",
        description:
          "Developed and managed the company's institutional website. Contributed to creating graphic materials using Photoshop, Canva, and CorelDRAW. Managed Google Ads campaigns and the company's social media presence.",
      },
    ],
    education: [
      {
        school: "FIAP",
        href: "https://www.fiap.com.br/",
        degree: "Bachelor in Artificial Intelligence",
        logoUrl: "/fiap.png",
        start: "Aug 2024",
        end: "Present",
      },
      {
        school: "Fatec Prof. Antonio Belizandro Barbosa Rezende",
        href: "https://fatecitapetininga.edu.br/",
        degree: "Bachelor in Systems Analysis and Development",
        logoUrl: "/fatec.png",
        start: "Aug 2019",
        end: "Aug 2021",
      },
      {
        school: "Etec Sales Gomes",
        href: "https://etecsalesgomes.cps.sp.gov.br/",
        degree: "Technical in Internet Computing",
        logoUrl: "/etec.png",
        start: "Feb 2018",
        end: "Jul 2019",
      },
    ],
    projects: [
      {
        title: "Event-Driven Notification Service",
        href: "https://github.com/ribeirogab/notification-service",
        dates: "Jan 2025 - Present",
        active: true,
        description:
          "A scalable event-driven notification service built with serverless architecture. Supports email, SMS, and push notifications with retry mechanisms and delivery tracking.",
        technologies: ["Node.js", "TypeScript", "AWS Lambda", "SQS", "DynamoDB", "Serverless Framework"],
        links: [{ type: "Source", href: "https://github.com/ribeirogab/notification-service", icon: <Icons.github className="size-3" /> }],
        image: "",
        video: "",
      },
      {
        title: "Subscription Management API",
        href: "https://github.com/ribeirogab/subscription-api",
        dates: "Sep 2024 - Dec 2024",
        active: true,
        description:
          "REST API for managing SaaS subscriptions with Stripe integration, webhook handling, and automated billing workflows. Built with clean architecture principles.",
        technologies: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Stripe", "Docker"],
        links: [{ type: "Source", href: "https://github.com/ribeirogab/subscription-api", icon: <Icons.github className="size-3" /> }],
        image: "",
        video: "",
      },
      {
        title: "AI Chat Assistant",
        href: "https://github.com/ribeirogab/ai-chat",
        dates: "Jun 2024 - Aug 2024",
        active: true,
        description:
          "An AI-powered chat assistant with context-aware conversations, document ingestion, and real-time streaming responses. Built as a full-stack application.",
        technologies: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "TailwindCSS", "Shadcn UI"],
        links: [{ type: "Source", href: "https://github.com/ribeirogab/ai-chat", icon: <Icons.github className="size-3" /> }],
        image: "",
        video: "",
      },
      {
        title: "Task Automation CLI",
        href: "https://github.com/ribeirogab/task-cli",
        dates: "Mar 2024 - May 2024",
        active: false,
        description:
          "A CLI tool for automating repetitive development tasks like project scaffolding, database migrations, and deployment pipelines. Designed with extensible plugin architecture.",
        technologies: ["Node.js", "TypeScript", "Commander.js", "Docker", "AWS"],
        links: [{ type: "Source", href: "https://github.com/ribeirogab/task-cli", icon: <Icons.github className="size-3" /> }],
        image: "",
        video: "",
      },
    ],
  },
  ui: {
    hero: { greeting: "Hi, I'm" },
    about: { title: "About" },
    work: { title: "Work Experience" },
    education: { title: "Education" },
    skills: { title: "Skills" },
    projects: {
      badge: "My Projects",
      title: "Check out my latest work",
      description: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    contact: {
      badge: "Contact",
      title: "Get in Touch",
      description: "Want to chat? Send me an email and I'll respond whenever I can.",
    },
    blog: {
      title: "Blog",
      description: "My thoughts on software development, life, and more.",
      noPosts: "No blog posts yet. Check back soon!",
      page: "Page",
      of: "of",
      previous: "Previous",
      next: "Next",
      backToBlog: "Back to Blog",
      posts: "posts",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist or may have been moved.",
      goHome: "Go to Home",
    },
  },
};

export default en;
