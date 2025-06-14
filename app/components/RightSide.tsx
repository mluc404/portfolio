import { myInfo } from "../constant/myInfo";
import JobCard from "./JobCard";
import ProjectCard from "./ProjectCard";

export default function RightSide() {
  return (
    <div className="flex flex-col px-6 py-8 gap-8 md:gap-20 md:px-20 md:py-24 ">
      {/* <div className="h-[100vh]"> */}
      <div id="about" className="flex flex-col gap-4 relative">
        <div className="blur-heading">ABOUT</div> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Minus quas eos, obcaecati animi temporibus
        dolor ea facere maxime necessitatibus perspiciatis nam, tenetur
        voluptate exercitationem corrupti cupiditate voluptatem itaque
        repellendus sapiente.
      </div>
      <div id="projects" className="flex flex-col gap-4 relative">
        <div className="blur-heading">PROJECTS</div>
        {myInfo.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div id="experience" className="flex flex-col gap-4 relative">
        <div className="blur-heading">EXPERIENCE</div>{" "}
        {myInfo.job.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
}
