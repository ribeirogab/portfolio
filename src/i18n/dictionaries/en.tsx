import type { Dictionary } from "../types";

const en: Dictionary = {
  resume: {
    description:
      "Software Engineer. I write code, launch projects, and automate everything I can.",
    summary:
      "Specialized in backend with experience in designing and building scalable, high-performance systems across different domains. Currently working at [Flavia Nasser](https://flavianasser.com.br/) as Lead Software Engineer. Previously at [Goomer](https://goomer.com.br/) for over 4 years. Experienced with serverless architectures, subscription integrations, and event-driven systems. Enthusiast of automation, AI, and software engineering best practices.",
    work: [
      {
        company: "Flavia Nasser",
        href: "https://flavianasser.com.br/",
        badges: [],
        location: "Remote",
        title: "Lead Software Engineer",
        logoUrl: "/flavianasser.png",
        start: "Feb 2026",
        end: "Present",
        description:
          "Leading the engineering team, managing developers and making technical decisions alongside stakeholders. Responsible for defining architecture, code standards, and development workflows. Driving technology strategy to support business growth and product scalability.",
      },
      {
        company: "Goomer",
        href: "https://goomer.com.br/",
        badges: [],
        location: "Remote",
        title: "Software Engineer",
        logoUrl: "/goomer.jpeg",
        start: "Aug 2021",
        end: "Feb 2026",
        description:
          "Key focal point of the backend team, leading technical decisions and actively contributing to product definitions. Led the merger between Goomer and Abrahão systems, focusing on unifying authentication, subscription, and user management flows. Developed and maintained scalable microservices, optimized databases, created well-documented REST APIs, and participated in legacy system refactoring. Collaborated on internal AI initiatives focused on process automation.",
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
