import { ProjectProps } from "../constant/myInfo";
import Image from "next/image";

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div
      className="flex flex-col sm:grid sm:grid-cols-[30%_1fr] gap-4 items-start      
    sm:px-4 sm:py-6 rounded-xl hover:shadow-sm shadow-white/20  hover:bg-blue-300/10
     transition-all duration-300 ease-in-out group"
    >
      <div className="hidden sm:block">
        <Image src={project.image} alt="project image" className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-[1.1rem] flex items-center gap-2 md:text-[1.3rem]">
          <span>{project.title}</span>
          <a
            href={project.link}
            className="font-light hover:text-cyan-300 transition-colors duration-200"
          >
            | Live Link
          </a>
          <a
            href={project.github}
            className="font-light hover:text-cyan-300 transition-colors duration-200"
          >
            | Github
          </a>{" "}
        </div>
        <div className="text-gray-400 leading-tight md:text-[1.2rem]">
          {project.description}
        </div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {project.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-green-300/20 rounded-[10px] px-2
            text-[.9rem] md:text-[1rem] text-cyan-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden">
        <Image src={project.image} alt="project image" className="rounded-xl" />
      </div>
    </div>
  );
}
