import { myInfo } from "../constant/myInfo";
import JobCard from "./JobCard";
import ProjectCard from "./ProjectCard";

export default function RightSide() {
  return (
    <div className="flex flex-col gap-20 px-20 py-24 ">
      {/* <div className="h-[100vh]"> */}
      <div id="about" className="">
        ABOUT Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        quas eos, obcaecati animi temporibus dolor ea facere maxime
        necessitatibus perspiciatis nam, tenetur voluptate exercitationem
        corrupti cupiditate voluptatem itaque repellendus sapiente.
      </div>
      <div id="projects" className="flex flex-col gap-4">
        {myInfo.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div id="experience" className="flex flex-col gap-4">
        {myInfo.job.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
}
