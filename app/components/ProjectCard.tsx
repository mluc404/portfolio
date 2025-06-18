import { ProjectProps } from "../constant/myInfo";
import Image from "next/image";
import arrow from "@/public/arrow.png";

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div
      className="flex flex-col sm:grid sm:grid-cols-[30%_1fr] gap-4 items-start hover:bg-blue-300/10
    sm:px-4 sm:py-6 rounded-xl hover:shadow-sm shadow-white/20 hover:cursor-pointer
     transition-all duration-200 ease-in-out group"
      onClick={() => window.open(project.link, "_blank")}
    >
      <div className="hidden sm:block">
        <Image src={project.image} alt="project image" className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-[1.1rem] flex items-center gap-2">
          <span>{project.title}</span>
          <span className="group-hover:self-start">
            <Image
              src={arrow}
              alt="arrow button"
              width={20}
              height={20}
            ></Image>
          </span>
        </div>
        <div className="text-gray-400 leading-tight">{project.description}</div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {project.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-green-300/20 rounded-[10px] px-2
            text-[.9rem] text-cyan-300"
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
