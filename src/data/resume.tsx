import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

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
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ribeirogab.work@gmail.com",
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
