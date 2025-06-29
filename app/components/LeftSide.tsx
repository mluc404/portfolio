"use client";

import NavButtons from "./NavButtons";
import githubLogo from "@/public/githubLogo.png";
import inLogo from "@/public/inLogo.png";
import emailLogo2 from "@/public/emailLogo2.png";
import Image from "next/image";

export default function LeftSide() {
  return (
    <div
      className="flex flex-col gap-8 justify-between px-6 py-10 
    md:px-20 md:py-24 md:h-[100vh] "
    >
      <div className="flex flex-col gap-20 ">
        <div id="my-name" className="flex flex-col gap-0">
          <h1 className="font-bold text-[2.8rem] md:text-[3.5rem]">Minh Luc</h1>
          <p className="text-[1.2rem] md:text-[1.2rem]">Frontend Developer</p>
          <p className="text-gray-400 mt-3 text-[1.1rem] md:text-[1.2rem]">
            I build responsive, user focused web applications.
          </p>
        </div>

        <div className="hidden md:block">
          <NavButtons />
        </div>
      </div>

      <div className="flex items-center gap-4 opacity-60">
        <div
          className="w-6 h-6"
          onClick={() => window.open("https://github.com/mluc404", "_blank")}
        >
          <Image src={githubLogo} alt="Github logo" className="icon-btn" />
        </div>
        <div
          className="w-6 h-6"
          onClick={() =>
            window.open("https://www.linkedin.com/in/minhluc", "_blank")
          }
        >
          <Image src={inLogo} alt="LinkedIn logo" className="icon-btn" />
        </div>
        <div
          className="w-8 h-8"
          onClick={() => window.open("mailto:mluc.connect@gmail.com", "_blank")}
        >
          <Image src={emailLogo2} alt="Email logo" className="icon-btn" />
        </div>
      </div>
    </div>
  );
}
