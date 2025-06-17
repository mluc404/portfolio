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
        <div className="flex flex-col gap-2 md:gap-4 text-gray-400 text-[1.05rem] leading-relaxed md:pt-4 md:pr-4">
          <p>
            I&apos;m a developer passionate about crafting intuitive and
            responsive web applications that prioritize{" "}
            <span className="text-white">user experience</span> and
            accessibility.{" "}
            <span className="hidden sm:inline">
              My focus lies in building seamless,{" "}
              <span className="text-white"> performance </span>
              driven interfaces using modern tools like React, TypeScript, and
              TailwindCSS.
            </span>
          </p>
          <p>
            As a recent graduate from UC San Diego with a Bachelor&apos;s in
            Data Science, I bring strong{" "}
            <span className="text-white">problem solving</span> skills and a
            technical foundation to my work in{" "}
            <span className="text-white">frontend development</span>. I&apos;m
            excited to kickstart my career and contribute to a creative,
            collaborative team.
          </p>
          <p>
            My background in photography and digital marketing has shaped my eye
            for <span className="text-white">design</span> and understanding of
            user engagement, blending creative and technical strengths to build
            meaningful, <span className="text-white">user focused</span> web
            experiences.
          </p>
        </div>
      </div>

      <div id="experience" className="flex flex-col gap-0 relative sm:pt-40">
        <div className="blur-heading">EXPERIENCE</div>{" "}
        <div className="flex flex-col gap-10 sm:gap-0">
          {myInfo.job.map((job, index) => (
            <JobCard job={job} key={index} />
          ))}
        </div>
      </div>

      <div id="projects" className="flex flex-col gap-2 relative sm:pt-15">
        <div className="blur-heading">PROJECTS</div>
        <div className="flex flex-col gap-10 sm:gap-4 ">
          {myInfo.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div
        id="education"
        className="flex flex-col gap-2 relative pt-5 sm:pt-15"
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
