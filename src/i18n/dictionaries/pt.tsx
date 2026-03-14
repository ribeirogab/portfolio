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
    projects: [],
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
    notFound: {
      title: "Página Não Encontrada",
      description: "A página que você está procurando não existe ou pode ter sido movida.",
      goHome: "Ir para Home",
    },
  },
};

export default pt;
