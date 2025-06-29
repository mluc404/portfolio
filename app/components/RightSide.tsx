"use client";

import { myInfo } from "../constant/myInfo";
import JobCard from "./JobCard";
import ProjectCard from "./ProjectCard";
import SchoolCard from "./SchoolCard";

export default function RightSide() {
  return (
    <div className="flex flex-col px-6 py-8 gap-8 md:gap-0 md:px-20 md:py-24 ">
      <div id="about" className="flex flex-col gap-0 relative">
        <div className="blur-heading">ABOUT</div>{" "}
        <div
          className="flex flex-col gap-4 text-gray-400 text-[1.05rem] md:text-[1.3rem]
        leading-relaxed md:pt-4 md:pr-4"
        >
          <p>
            I&apos;m a frontend developer passionate about building{" "}
            <span className="text-white">accessible </span>
            and intuitive web applications that prioritize{" "}
            <span className="text-white"> user experience </span> at scale. I
            specialize in crafting performance driven interfaces using
            technologies like React, TypeScript, and Tailwind CSS.
          </p>
          <p>
            With a foundation in data science and frontend development
            experience, I&apos;m confident in my ability to solve problems
            through clean,
            <span className="text-white"> maintainable code</span> and
            thoughtful design. I&apos;m eager to contribute to{" "}
            <span className="text-white"> collaborative </span>
            teams working on high impact products.
          </p>
          <p>
            My background in photography and digital marketing sharpens my eye
            for user engagement and design, allowing me to blend{" "}
            <span className="text-white">creative</span> and{" "}
            <span className="text-white">technical</span> thinking to create
            meaningful user experiences that deliver real value.
          </p>
          <p>
            Outside of tech, I enjoy surfing, snorkeling, and dancing salsa -
            anything that keeps me active and curious.
          </p>
        </div>
      </div>

      <div
        id="experience"
        className="flex flex-col gap-0 relative sm:pt-60 sm:pb-30"
      >
        <div className="blur-heading">EXPERIENCE</div>{" "}
        <div className="flex flex-col gap-10 sm:gap-0">
          {myInfo.job.map((job, index) => (
            <JobCard job={job} key={index} />
          ))}
        </div>
      </div>

      <div id="projects" className="flex flex-col gap-2 relative">
        <div className="blur-heading">PROJECTS</div>
        <div className="flex flex-col gap-10 sm:gap-4 ">
          {myInfo.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div
        id="education"
        className="flex flex-col gap-2 relative pt-5 sm:pt-35"
      >
        <div className="blur-heading">EDUCATION</div>
        <div className="flex flex-col gap-2">
          {myInfo.schools.map((school, index) => (
            <SchoolCard key={index} school={school} />
          ))}
        </div>
      </div>
    </div>
  );
}
