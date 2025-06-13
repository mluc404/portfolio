import { ProjectProps } from "../constant/myInfo";
import Image from "next/image";

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="grid grid-cols-[30%_1fr] gap-4 items-start hover:bg-blue-300/10">
      <div className="">
        {/* <div className="relative"> */}
        <Image src={project.image} alt="project image" className="rounded-xl" />
      </div>
      <div className="flex flex-col">
        <div>{project.title}</div>
        <div>{project.description}</div>
        <div className="flex gap-2">
          {project.skills.map((skill, index) => (
            <div key={index} className="bg-blue-400/50 rounded-[15px] px-2">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
