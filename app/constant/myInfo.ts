import { StaticImageData } from "next/image";
import placeholder from "@/public/placeholder.svg";
import roamio1 from "@/public/roamio1.png";
import roamio2 from "@/public/roamio2.png";
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
      company: "Self-Learning and Projects",
      time: "July 2024 - Present",
      description: `I've immersed myself in The Odin Project
         with a strong focus on Frontend development. 
         I've built hands on projects to hone my skills and bring ideas to life. 
         Currently, I'm expanding my skills by learning Backend 
         development to enhance my versatility.`,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Vite",
        "Supabase",
        "Authentication",
      ],
    },
    {
      title: "X-Force Research Intern",
      company: "National Security Innovation Network (NSIN) ",
      time: "June - August 2022 ",
      description:
        "Created interactive data visualizations with JavaScript and Python to aid research teams. Applied machine learning to extract insights from complex data and delivered comprehensive analytical reports. This role sharpened my technical and analytical expertise.",
      skills: [
        "Python",
        "Data Analysis",
        "Data Visualization",
        "Collaboration",
        "Presentation",
      ],
    },
    {
      title: "Digital Marketing Specialist ",
      company: "Hopeboat Productions",
      time: "2017 - 2020",
      description:
        "Maintained the company website using HTML, CSS, and JavaScript. Boosted online presence by 23% through social media strategies and enhanced site responsiveness across devices. This blended my creative and technical skills for business growth.",
      skills: ["Makerting", "Business Development", "Photography"],
    },
  ],

  projects: [
    {
      title: "Roamio Travel Planner",
      description:
        "Inspired by my passion for travel, I created Roamio, a full stack app designed to streamline and enhance your travel planning and management experience.",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Supabase",
        "Vercel",
      ],
      image: roamio2,
      link: "",
    },
    {
      title: "PokeMind",
      description:
        "Test your memory by selecting unique Pokémon cards in the correct order. PokeMind challenges players to stay sharp as the cards shuffle after every correct selection.",
      skills: ["Vite", "React", "JavaScript", "CSS", "PokeAPI"],
      image: pokeMind,
      link: "",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, adaptable website built to perform flawlessly on both desktop and mobile, highlighting my projects and skills with a smooth user experience.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      image: placeholder,
      link: "",
    },
  ],

  schools: [
    {
      time: "2024 - present",
      school: "The Odin Project",
      major: "Full Stack JavaScript Course",
    },
    { time: "2020-2024", school: "UC San Diego", major: "Data Science" },
  ],
};
