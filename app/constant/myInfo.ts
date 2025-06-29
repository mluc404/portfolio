import { StaticImageData } from "next/image";
import roamio3 from "@/public/roamio3.png";
import portfo4 from "@/public/portfo4.png";
import pokeMind from "@/public/pokeMind.png";

export interface JobProps {
  title: string;
  company: string;
  time: string;
  description: string;
  skills: string[];
}

export interface ProjectProps {
  title: string;
  description: string;
  skills: string[];
  image: StaticImageData | string;
  link: string;
  github: string;
}

export interface SchoolProps {
  time: string;
  school: string;
  major: string;
}

interface MyInfoType {
  job: JobProps[];
  projects: ProjectProps[];
  schools: SchoolProps[];
}

export const myInfo: MyInfoType = {
  job: [
    {
      title: "Frontend Developer",
      company: "Open Source Projects",
      time: "July 2024 - Present",

      description: `Built and deployed full stack web apps with a focus on modern frontend development.
       Applied component based architecture, responsive design, secure user data and authentication. 
       Projects include Roamio Travel Planner with real time cloud sync and AI driven features.`,

      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Vite",
        "Supabase",
        "Authentication",
        "UI/UX",
        "Git",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "National Security Innovation Network (NSIN) ",
      time: "June - August 2022 ",
      description: `Built interactive dashboards to improve research team decision making efficiency.
      Analyzed 10+ large scale datasets to extract patterns, supporting critical insights.
      Delivered presentations and data stories to stakeholders, increasing research productivity.`,
      skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "D3.js",
        "Python",
        "Data Analysis",
        "Collaboration",
        "Presentation",
      ],
    },
    {
      title: "Web Developer / Marketing Specialist ",
      company: "Hopeboat Productions",
      time: "2017 - 2020",
      description: `Revamped company website using HTML, CSS, and JavaScript, 
      increasing average session duration and reducing bounce rate.
      Designed and executed marketing campaigns, boosting event bookings via Google Ads 
      and social content optimization.
      Analyzed campaign performance and UX flow to improve conversion rates and ROI.`,

      skills: [
        "Web Development",
        "Makerting",
        "Photography",
        "SEO",
        "Business Development",
        "Communication",
      ],
    },
  ],

  projects: [
    {
      title: "Roamio",
      description: `AI powered travel planner that helps users generate, save, 
      and sync personalized itineraries across devices. Features secure login, 
      real time data sync, and responsive UI`,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "Material UI",
        "Vercel",
        "Gemini",
      ],
      image: roamio3,
      link: "https://roamio-travel-planner.vercel.app/",
      github: "https://github.com/mluc404/travel-planner",
    },
    {
      title: "PokeMind",
      description: `Interactive memory card game using PokeAPI to fetch 100+ unique cards. 
      Features randomized gameplay, two difficulty modes, responsive design for both desktop and mobile.`,
      skills: ["Vite", "React", "JavaScript", "CSS", "PokeAPI"],
      image: pokeMind,
      link: "https://pokemindgame.netlify.app/",
      github: "https://github.com/mluc404/memory-cards",
    },
    {
      title: "Portfolio Website",
      description: `Personal portfolio built with a focus on speed and responsiveness, loads in 0.4 seconds with a clean UI.`,
      skills: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      image: portfo4,
      link: "https://www.minhluc.com",
      github: "https://github.com/mluc404/portfolio",
    },
  ],

  schools: [
    {
      time: "2024 - 2025",
      school: "The Odin Project",
      major: "Full Stack JavaScript Course",
    },
    {
      time: "Graduated 2024",
      school: "UC San Diego",
      major: "Bachelor of Science in Data Science",
    },
  ],
};
