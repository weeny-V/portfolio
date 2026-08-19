import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";
import { SITE_URL } from "@/lib/site-config";
import { Java } from "@/components/ui/svgs/java";

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  links: readonly { title: string; icon: React.ReactNode; href: string }[];
};

export const DATA = {
  name: "Vladyslav Kruhlov",
  initials: "VK",
  url: SITE_URL,
  location: "Kharkiv, Ukraine",
  locationLink: "https://www.google.com/maps/place/Kharkiv,+Ukraine",
  description:
    "Fullstack Developer with 4+ years of experience building responsive, real-time, and multi-tenant web applications.",
  summary:
    "I am a **Fullstack Developer** specializing in React, Next.js, and TypeScript. I build responsive interfaces, complex state-driven forms, real-time WebSocket features, reusable UI systems, and API integrations. I have also contributed to frontend modernization by upgrading 30+ React modules, introducing Vite, migrating projects from SVN to Git, and improving CI/CD workflows.",
  avatarUrl: "/vladyslav-kruhlov.jpg",
  skills: [
    { name: "JavaScript", icon: undefined },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Redux Toolkit", icon: undefined },
    { name: "Node.js", icon: Nodejs },
    { name: "NestJS", icon: undefined },
    { name: "Java", icon: Java },
    { name: "Kotlin", icon: undefined },
    { name: "Spring Boot", icon: undefined },
    { name: "Tailwind CSS", icon: undefined },
    { name: "Material UI", icon: undefined },
    { name: "MongoDB", icon: undefined },
    { name: "MySQL", icon: undefined },
    { name: "Redis", icon: undefined },
    { name: "RabbitMQ", icon: undefined },
    { name: "WebSockets", icon: undefined },
    { name: "GraphQL", icon: undefined },
    { name: "Jest", icon: undefined },
    { name: "Vite", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "GitLab CI/CD", icon: undefined },
    { name: "LangChain", icon: undefined },
    { name: "OpenAI API", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "vladkruglovfencer@gmail.com",
    tel: "+380663015013",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/weeny-V",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vladyslav-kruhlov-24969b229/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:vladkruglovfencer@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "ProfITsoft",
      href: "https://profitsoft.ua/",
      badges: [],
      location: "Ukraine",
      title: "Software Engineer",
      logoUrl: "/profitsoft.png",
      start: "Feb 2024",
      end: "Present",
      description:
        "Contribute to PSW across React interfaces and backend services using MongoDB, Redis, RabbitMQ, and LangChain-powered functionality. On the Xempus (formerly eVorsorge) multi-tenant insurance platform, developed complex calculation forms, role-based access flows, isolated organizational structures, and client-specific themes. Upgraded 30+ modules from React 16 to React 18, supported migrations from Webpack to Vite and SVN to Git, contributed to the Jenkins-to-GitLab CI/CD transition, and maintained Jest and React Testing Library coverage.",
    },
    {
      company: "UpUp",
      href: "https://upup.one/",
      badges: [],
      location: "Ukraine",
      title: "Frontend Developer",
      logoUrl: "/upup.png",
      start: "Dec 2022",
      end: "Feb 2024",
      description:
        "Built a responsive charitable assistance and donation platform from the ground up with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS, including backend API and Diia integrations. Also developed a real-time poker tournament platform with WebSockets, multi-step Redux forms, reusable Material UI components, and state-driven tournament logic in collaboration with backend engineers.",
    },
  ],
  education: [
    {
      school: "H. S. Skovoroda Kharkiv National Pedagogical University",
      href: "https://hnpu.edu.ua/en/",
      degree: "Master's degree, Physical Education and Sport",
      logoUrl: "/kharkiv-pedagogical-university.png",
      start: "Sep 2017",
      end: "Nov 2022",
    },
  ],
  projects: [
    {
      title: "Xempus (formerly eVorsorge)",
      href: "https://www.xempus.ai/xempus-advisor-enterprise",
      dates: "ProfITsoft · 2024 - Present",
      active: true,
      description:
        "Multi-tenant insurance and workforce management platform with dynamic calculation forms, role-based access, isolated organizational structures, and customer-specific branding.",
      technologies: ["React", "TypeScript", "Jest", "React Testing Library", "Vite", "GitLab CI/CD"],
      links: [],
      image: "/xempus.png",
      video: "",
    },
    {
      title: "Project Stream",
      href: "https://stream.proto.fund/uk",
      dates: "UpUp · Dec 2022 - Feb 2024",
      active: false,
      description:
        "Responsive charitable assistance and donation platform with separate user journeys for requesting and offering help, backend API integration, Diia integration, and donation functionality.",
      technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      links: [],
      image: "/project-stream.png",
      video: "",
    },
    {
      title: "Straddle",
      href: undefined,
      dates: "UpUp · Dec 2022 - Feb 2024",
      active: false,
      description:
        "Real-time platform for creating poker tournaments and tracking gameplay, featuring WebSocket synchronization, multi-step configuration forms, and state-dependent tournament logic.",
      technologies: ["React", "TypeScript", "Redux", "WebSockets", "Material UI", "Styled Components"],
      links: [],
      image: "/straddle.svg",
      video: "",
    },
  ],
  hackathons: [] as readonly Hackathon[],
} as const;
