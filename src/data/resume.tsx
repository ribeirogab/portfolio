import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Aws } from "@/components/ui/svgs/aws";
import { Cloudflare } from "@/components/ui/svgs/cloudflare";
import { Docker } from "@/components/ui/svgs/docker";
import { Terraform } from "@/components/ui/svgs/terraform";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Dynamodb } from "@/components/ui/svgs/dynamodb";
import { Redis } from "@/components/ui/svgs/redis";
import { Nestjs } from "@/components/ui/svgs/nestjs";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Php } from "@/components/ui/svgs/php";
import { ClaudeCode } from "@/components/ui/svgs/claudecode";

export const DATA = {
  name: "Gabriel Ribeiro",
  initials: "GR",
  url: "https://gabrielribeiro.work",
  location: "Tatuí - SP, Brazil",
  locationLink: "https://g.co/kgs/sTbLmGm",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Node.js", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
    { name: "AWS", icon: Aws },
    { name: "Cloudflare", icon: Cloudflare },
    { name: "Docker", icon: Docker },
    { name: "Terraform", icon: Terraform },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: Mysql },
    { name: "MongoDB", icon: Mongodb },
    { name: "DynamoDB", icon: Dynamodb },
    { name: "Redis", icon: Redis },
    { name: "NestJS", icon: Nestjs },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "PHP", icon: Php },
    { name: "Claude Code", icon: ClaudeCode },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "g@gabrielribeiro.work",
    tel: "+5515991164345",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ribeirogab",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ribeirogab/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/gbr_osr",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ribeirogab",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
} as const;
