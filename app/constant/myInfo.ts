import { StaticImageData } from "next/image";
import placeholder from "@/public/placeholder.svg";

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
}

interface MyInfoType {
  job: JobProps[];
  projects: ProjectProps[];
}

export const myInfo: MyInfoType = {
  job: [
    {
      title: "Job Tittle 1",
      company: "Company 1",
      time: "2020-2024",
      description: "Job description",
      skills: ["skill 1", "skill 2"],
    },
    {
      title: "Job Tittle 2",
      company: "Company 2",
      time: "2020-2024",
      description: "Job description",
      skills: ["skill 1", "skill 2"],
    },
  ],

  projects: [
    {
      title: "Project 1",
      description: "Project description",
      skills: ["react", "nextjs"],
      image: placeholder,
    },
    {
      title: "Project 2",
      description: "Project description",
      skills: ["react", "nextjs"],
      image: placeholder,
    },
    {
      title: "Project 3",
      description: "Project description",
      skills: ["react", "nextjs"],
      image: placeholder,
    },
  ],
};
