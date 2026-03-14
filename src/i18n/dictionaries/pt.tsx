import { Icons } from "@/components/icons";
import type { Dictionary } from "../types";

const pt: Dictionary = {
  resume: {
    description:
      "Engenheiro de Software. Escrevo código, lanço projetos e automatizo tudo que posso.",
    summary:
      "Especializado em back-end com experiência no design e construção de sistemas escaláveis e de alta performance em diferentes domínios. Atuo atualmente na [Goomer](https://goomer.com.br/) e tenho uma consultoria de software ([Zunix](/#work)) desde 2025, entregando soluções para projetos simples e complexos. Tenho vivência com arquiteturas serverless, integrações de assinatura e sistemas orientados a eventos. Sou entusiasta de automações, IA e boas práticas de engenharia de software.",
    work: [
      {
        company: "Goomer",
        href: "https://goomer.com.br/",
        badges: [],
        location: "Remoto",
        title: "Engenheiro de Software",
        logoUrl: "/goomer.jpeg",
        start: "ago de 2021",
        end: "o momento",
        description:
          "Ponto focal do time de back-end, liderando decisões técnicas e contribuindo ativamente em definições de produto. Liderou a fusão entre os sistemas da Goomer e da Abrahão, com foco na unificação de fluxos de autenticação, assinatura e gerenciamento de usuários. Desenvolve e mantém microsserviços escaláveis, otimiza bancos de dados, cria APIs REST bem documentadas e participa na refatoração de sistemas legados. Colaborou em iniciativas internas de IA voltadas à automação de processos.",
      },
      {
        company: "Zunix",
        href: "#",
        badges: [],
        location: "Remoto",
        title: "CTO",
        logoUrl: "/zunix.png",
        start: "jan de 2025",
        end: "o momento",
        description:
          "Responsável técnico pela consultoria de software, conduzindo todo o ciclo de vida dos projetos — do entendimento das necessidades do cliente ao deploy em produção. Participa de reuniões estratégicas, identifica dores reais de negócio e propõe soluções eficientes e escaláveis. Responsável por arquitetura, desenvolvimento, testes, documentação e manutenção dos sistemas entregues.",
      },
      {
        company: "iClouds",
        href: "#",
        badges: [],
        location: "Remoto",
        title: "Engenheiro de Software",
        logoUrl: "/iclouds.jpeg",
        start: "jul de 2020",
        end: "ago de 2021",
        description:
          "Foco em back-end, construindo e mantendo as principais APIs da empresa. Também trabalhou em projetos front-end usando React, Next.js e React Native. Implementou testes unitários com TDD, organizou a arquitetura seguindo princípios como DDD, SOLID e clean code, e gerenciou bancos de dados relacionais (PostgreSQL) e não relacionais (MongoDB).",
      },
      {
        company: "Makertech Labs",
        href: "https://www.makertechlabs.com.br/",
        badges: [],
        location: "Santa Clara, CA",
        title: "Técnico em Informática",
        logoUrl: "/makertechlabs.jpeg",
        start: "ago de 2018",
        end: "out de 2019",
        description:
          "Desenvolveu e gerenciou o site institucional da empresa. Contribuiu na criação de materiais gráficos usando Photoshop, Canva e CorelDRAW. Gerenciou campanhas no Google Ads e as redes sociais da empresa.",
      },
    ],
    education: [
      {
        school: "FIAP",
        href: "https://www.fiap.com.br/",
        degree: "Tecnólogo em Inteligência Artificial",
        logoUrl: "/fiap.png",
        start: "ago de 2024",
        end: "o momento",
      },
      {
        school: "Fatec Prof. Antonio Belizandro Barbosa Rezende",
        href: "https://fatecitapetininga.edu.br/",
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        logoUrl: "/fatec.png",
        start: "ago de 2019",
        end: "ago de 2021",
      },
      {
        school: "Etec Sales Gomes",
        href: "https://etecsalesgomes.cps.sp.gov.br/",
        degree: "Técnico em Informática para Internet",
        logoUrl: "/etec.png",
        start: "fev de 2018",
        end: "jul de 2019",
      },
    ],
    projects: [
      {
        title: "Event-Driven Notification Service",
        href: "https://github.com/ribeirogab/notification-service",
        dates: "Jan 2025 - Presente",
        active: true,
        description:
          "Serviço de notificações event-driven escalável com arquitetura serverless. Suporta email, SMS e push notifications com mecanismos de retry e rastreamento de entrega.",
        technologies: ["Node.js", "TypeScript", "AWS Lambda", "SQS", "DynamoDB", "Serverless Framework"],
        links: [{ type: "Source", href: "https://github.com/ribeirogab/notification-service", icon: <Icons.github className="size-3" /> }],
        image: "",
        video: "",
      },
      {
        title: "Subscription Management API",
        href: "https://github.com/ribeirogab/subscription-api",
        dates: "Set 2024 - Dez 2024",
        active: true,
        description:
          "API REST para gerenciamento de assinaturas SaaS com integração Stripe, tratamento de webhooks e fluxos de cobrança automatizados. Construída com princípios de clean architecture.",
        technologies: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Stripe", "Docker"],
        links: [{ type: "Source", href: "https://github.com/ribeirogab/subscription-api", icon: <Icons.github className="size-3" /> }],
        image: "",
        video: "",
      },
      {
        title: "AI Chat Assistant",
        href: "https://github.com/ribeirogab/ai-chat",
        dates: "Jun 2024 - Ago 2024",
        active: true,
        description:
          "Assistente de chat com IA com conversas contextuais, ingestão de documentos e respostas em tempo real via streaming. Construído como aplicação full-stack.",
        technologies: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "TailwindCSS", "Shadcn UI"],
        links: [{ type: "Source", href: "https://github.com/ribeirogab/ai-chat", icon: <Icons.github className="size-3" /> }],
        image: "",
        video: "",
      },
      {
        title: "Task Automation CLI",
        href: "https://github.com/ribeirogab/task-cli",
        dates: "Mar 2024 - Mai 2024",
        active: false,
        description:
          "Ferramenta CLI para automatizar tarefas repetitivas de desenvolvimento como scaffolding de projetos, migrações de banco de dados e pipelines de deploy. Projetada com arquitetura de plugins extensível.",
        technologies: ["Node.js", "TypeScript", "Commander.js", "Docker", "AWS"],
        links: [{ type: "Source", href: "https://github.com/ribeirogab/task-cli", icon: <Icons.github className="size-3" /> }],
        image: "",
        video: "",
      },
    ],
  },
  ui: {
    hero: { greeting: "Olá, sou" },
    about: { title: "Sobre" },
    work: { title: "Experiência Profissional" },
    education: { title: "Educação" },
    skills: { title: "Habilidades" },
    projects: {
      badge: "Meus Projetos",
      title: "Confira meus últimos trabalhos",
      description: "Trabalhei em uma variedade de projetos, desde sites simples até aplicações web complexas. Aqui estão alguns dos meus favoritos.",
      viewAll: "Ver todos os projetos",
      pageTitle: "Projetos",
      pageDescription: "Uma coleção de projetos em que trabalhei.",
    },
    contact: {
      badge: "Contato",
      title: "Entre em Contato",
      description: "Quer conversar? Me envie um email e responderei assim que puder.",
    },
    blog: {
      title: "Blog",
      description: "Meus pensamentos sobre desenvolvimento de software, vida e mais.",
      noPosts: "Nenhum post ainda. Volte em breve!",
      page: "Página",
      of: "de",
      previous: "Anterior",
      next: "Próximo",
      backToBlog: "Voltar ao Blog",
      posts: "posts",
    },
    notFound: {
      title: "Página Não Encontrada",
      description: "A página que você está procurando não existe ou pode ter sido movida.",
      goHome: "Ir para Home",
    },
  },
};

export default pt;
