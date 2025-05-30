import { HomeIcon } from 'lucide-react';

import { Icons } from '@/components/icons';

import { ProfileData } from './types';

export const DATA: ProfileData = {
  name: 'Gabriel Ribeiro',
  initials: 'GR',
  url: 'https://gabrielribeiro.work',
  location: 'Tatuí - SP, Brasil',
  locationLink: 'https://g.co/kgs/sTbLmGm',
  description: 'Engenheiro de Software',
  summary:
    'Especializado em back-end com experiência no design e construção de sistemas escaláveis e de alta performance em diferentes domínios. Atuo atualmente na Goomer e tenho uma consultoria de software desde 2025, entregando soluções para projetos simples e complexos. Tenho vivência com arquiteturas serverless, integrações de assinatura e sistemas orientados a eventos. Sou entusiasta de automações, IA e boas práticas de engenharia de software.',
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
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }] as {
    href: string;
    icon: React.ElementType;
    label: string;
  }[],
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
      title: 'Engenheiro de Software',
      logoUrl: '/goomer.jpeg',
      start: 'ago de 2021',
      end: 'o momento',
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
            Sou um dos pontos focais do time de back-end da empresa, liderando
            decisões técnicas e contribuindo ativamente em definições de
            produto. Fui um dos principais responsáveis pela fusão entre os
            sistemas da Goomer e da Abrahão, com foco na unificação de fluxos de
            autenticação, assinatura e gerenciamento de usuários. Atuei como
            referência técnica nessas iniciativas, garantindo o alinhamento
            entre times e a integridade da arquitetura.
          </p>
          <p>
            Minhas responsabilidades incluem o desenvolvimento e manutenção de
            microsserviços escaláveis, otimização de bancos de dados relacionais
            e não-relacionais, e criação de APIs REST bem documentadas. Também
            participo ativamente na refatoração de sistemas legados, promovendo
            padrões modernos e melhorando performance e manutenibilidade.
          </p>
          <p>
            Além disso, colaborei em iniciativas internas com uso de IA voltadas
            à automação de processos, com foco em aumentar a eficiência do time
            de engenharia.
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
      start: 'jan de 2025',
      end: 'o momento',
      links: [],
      description: (
        <div className="flex flex-col gap-2">
          <p>
            Atuo como responsável técnico pela minha consultoria de software,
            conduzindo todo o ciclo de vida dos projetos — desde o entendimento
            das necessidades do cliente até o deploy em produção. Participo das
            reuniões estratégicas, identifico dores reais de negócio e proponho
            soluções eficientes, escaláveis e alinhadas aos objetivos do
            cliente.
          </p>
          <p>
            Sou responsável por todas as etapas técnicas: arquitetura,
            desenvolvimento, testes, documentação e manutenção dos sistemas
            entregues. Também contribuo na definição de escopo e orçamento,
            garantindo viabilidade técnica e clareza nas entregas.
          </p>
        </div>
      ),
    },
    {
      company: 'iClouds',
      badges: [],
      location: 'Remote',
      title: 'Engenheiro de Software',
      logoUrl: '/iclouds.jpeg',
      start: 'jul de 2020',
      end: 'ago de 2021',
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
            Atuei com o foco em back-end, sendo responsável pela construção e
            manutenção das principais APIs da empresa. Trabalhei também em
            projetos front-end utilizando React, Next.js e React Native,
            entregando interfaces modernas e bem integradas com os serviços da
            plataforma.
          </p>
          <p>
            Implementei testes unitários com TDD, organizei a arquitetura dos
            projetos seguindo princípios como DDD, SOLID e clean code, e
            participei do gerenciamento de bancos de dados relacionais
            (PostgreSQL) e não relacionais (MongoDB). Além disso, contribuí na
            padronização de projetos e organização de tarefas do time.
          </p>
          <p>
            Essa experiência me deu uma base sólida em desenvolvimento web,
            tanto no back quanto no front, e ampliou minha visão sobre boas
            práticas e organização de software em ambientes reais de produção.
          </p>
        </div>
      ),
    },
    {
      company: 'Makertech Labs',
      badges: [],
      location: 'Santa Clara, CA',
      title: 'Técnico em Informática',
      logoUrl: '/makertechlabs.jpeg',
      start: 'ago de 2018',
      end: 'out de 2019',
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
            Atuei como técnico de informática, sendo responsável por atividades
            que integravam tecnologia, design e marketing digital. Desenvolvi e
            gerenciei o site institucional da empresa, além de realizar o
            controle e manutenção dos computadores utilizados no ambiente
            corporativo.
          </p>
          <p>
            Contribuí ativamente na criação de materiais gráficos, como banners,
            folders e displays, utilizando ferramentas como Photoshop, Canva e
            CorelDRAW. Também fui responsável pela criação e gestão de campanhas
            no Google Ads e pelo gerenciamento das mídias sociais da empresa,
            alinhando a comunicação visual com os objetivos estratégicos da
            marca.
          </p>
        </div>
      ),
    },
  ],

  education: [
    {
      school: 'FIAP',
      href: 'https://www.fiap.com.br/',
      degree: 'Tecnólogo em Inteligência Artificial',
      logoUrl: '/fiap.png',
      start: 'ago de 2024',
      end: 'o momento',
    },
    {
      school: 'Fatec Prof. Antonio Belizandro Barbosa Rezende',
      href: 'https://fatecitapetininga.edu.br/',
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      logoUrl: '/fatec.png',
      start: 'ago de 2019',
      end: 'ago de 2021',
    },
    {
      school: 'Etec Sales Gomes',
      href: 'https://etecsalesgomes.cps.sp.gov.br/',
      degree: 'Técnico em Informática para Internet',
      logoUrl: '/etec.png',
      start: 'fev de 2018',
      end: 'jul de 2019',
    },
  ],

  projects: [],

  hackathons: [],
};
