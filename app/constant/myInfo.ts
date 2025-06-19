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
      company: "Self-Initiated Projects",
      time: "July 2024 - Present",

      description: `I've completed The Odin Project’s full stack JavaScript curriculum 
      with a strong focus on modern frontend development. Through personal projects,
       I've applied concepts like component driven architecture, responsive design, 
       state management, and testing. I'm now expanding into backend development while 
       continuing to build projects that reflect real world applications.`,
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
      description: `Created interactive data visualizations with JavaScript and Python to aid research teams. 
        Applied machine learning to extract insights from complex data and delivered comprehensive 
        analytical reports. This role sharpened my technical and analytical skills.`,
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
      description: `Maintained the company website using HTML, CSS, and JavaScript. 
        Boosted online presence through social media strategies and enhanced site 
        responsiveness across devices. This blended my creative and technical skills for business growth.`,
      skills: ["Makerting", "Business Development", "Photography"],
    },
  ],

  projects: [
    {
      title: "Roamio Travel Planner",
      description: `Full stack travel planner allowing users to plan and manage trips with Ai powered suggestions.`,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Supabase",
        "Vercel",
        "Gemini",
        "Google Place",
      ],
      image: roamio3,
      link: "https://github.com/mluc404/travel-planner",
    },
    {
      title: "PokeMind",
      description: `Interactive memory card game leveraging PokeAPI to dynamically render Pokémon cards
       with two difficulty levels.`,
      skills: ["Vite", "React", "JavaScript", "CSS", "PokeAPI"],
      image: pokeMind,
      link: "https://github.com/mluc404/memory-cards",
    },
    {
      title: "Portfolio Website",
      description: `Personal site showcasing projects and skills with seamless mobile/desktop 
      performance and modern UI design.`,
      skills: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      image: portfo4,
      link: "https://github.com/mluc404/portfolio",
    },
  ],

  schools: [
    {
      time: "2024 - present",
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
