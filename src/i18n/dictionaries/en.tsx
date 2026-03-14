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
    projects: [],
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
      viewAll: "View all projects",
      pageTitle: "Projects",
      pageDescription: "A collection of projects I've worked on.",
    },
    contact: {
      badge: "Contact",
      title: "Get in Touch",
      description: "Want to chat? Send me an email and I'll respond whenever I can.",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist or may have been moved.",
      goHome: "Go to Home",
    },
  },
};

export default en;
