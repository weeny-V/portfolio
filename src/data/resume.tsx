import { Icons } from "@/components/icons";
import {
  Accessibility,
  Boxes,
  CalendarDays,
  FlaskConical,
  HomeIcon,
  Route,
  Sparkles,
  TestTube2,
} from "lucide-react";
import {
  ReactLight,
  NextjsIconDark,
  Typescript,
  Nodejs,
  Docker,
  Java,
  JavaScript,
  Redux,
  NestJS,
  Kotlin,
  SpringBoot,
  Tailwind,
  Mui,
  Mongodb,
  Mysql,
  Redis,
  Rabbitmq,
  Graphql,
  Jest,
  Vite,
  Vue,
  Gitlab,
  Openai,
  Websocket,
  Langchain
} from "@/components/ui/svgs"
import { SITE_URL } from "@/lib/site-config";

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
    { name: "JavaScript", icon: JavaScript, category: "Frontend" },
    { name: "TypeScript", icon: Typescript, category: "Frontend" },
    { name: "React", icon: ReactLight, category: "Frontend" },
    { name: "Next.js", icon: NextjsIconDark, category: "Frontend" },
    { name: "Redux Toolkit", icon: Redux, category: "Frontend" },
    { name: "Tailwind CSS", icon: Tailwind, category: "Frontend" },
    { name: "Material UI", icon: Mui, category: "Frontend" },
    { name: "Vite", icon: Vite, category: "Frontend" },
    { name: "Vue 3", icon: Vue, category: "Frontend" },
    { name: "Vue Router", icon: Route, category: "Frontend" },
    { name: "Pinia", icon: Boxes, category: "Frontend" },
    { name: "Day.js", icon: CalendarDays, category: "Frontend" },
    { name: "Motion for Vue", icon: Sparkles, category: "Frontend" },
    { name: "Node.js", icon: Nodejs, category: "Backend" },
    { name: "NestJS", icon: NestJS, category: "Backend" },
    { name: "Java", icon: Java, category: "Backend" },
    { name: "Kotlin", icon: Kotlin, category: "Backend" },
    { name: "Spring Boot", icon: SpringBoot, category: "Backend" },
    { name: "WebSockets", icon: Websocket, category: "Backend" },
    { name: "GraphQL", icon: Graphql, category: "Backend" },
    { name: "MongoDB", icon: Mongodb, category: "Data & Messaging" },
    { name: "MySQL", icon: Mysql, category: "Data & Messaging" },
    { name: "Redis", icon: Redis, category: "Data & Messaging" },
    { name: "RabbitMQ", icon: Rabbitmq, category: "Data & Messaging" },
    { name: "LangChain", icon: Langchain, category: "AI & APIs" },
    { name: "OpenAI API", icon: Openai, category: "AI & APIs" },
    { name: "Docker", icon: Docker, category: "DevOps & Testing" },
    { name: "GitLab CI/CD", icon: Gitlab, category: "DevOps & Testing" },
    { name: "Jest", icon: Jest, category: "DevOps & Testing" },
    { name: "Vitest", icon: FlaskConical, category: "DevOps & Testing" },
    { name: "Vue Test Utils", icon: TestTube2, category: "DevOps & Testing" },
    { name: "axe-core", icon: Accessibility, category: "DevOps & Testing" },
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
  personalProjects: [
    {
      title: "Notion Word Saver",
      href: "https://github.com/weeny-V/english-extension",
      dates: "Personal project · 2026",
      active: true,
      description:
        "Browser extension for translating selected text with Gemini AI and saving the original phrase and translation to a Notion page. Supports 16 languages and organizes saved entries into daily pages.",
      technologies: ["Extension.js", "React", "TypeScript", "Gemini AI", "Notion API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/weeny-V/english-extension",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/notion-word-saver.svg",
      video: "",
    },
    {
      title: "Daymark",
      href: "https://weeny-v.github.io/daymark/#/today",
      dates: "Personal project · 2026",
      active: true,
      description:
        "Responsive, browser-local productivity dashboard for daily planning, tasks, habits, notes, and workspace preferences. Data stays in the browser and can be exported or restored as a versioned JSON backup.",
      technologies: ["Vue 3", "TypeScript", "Pinia", "Vue Router", "Vite", "Vitest"],
      links: [
        {
          type: "Source",
          href: "https://github.com/weeny-V/daymark",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/daymark.svg",
      video: "",
    },
  ],
  hackathons: [] as readonly Hackathon[],
} as const;
