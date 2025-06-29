"use client";

import { useEffect, useState } from "react";

export default function NavButtons() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const buttonNames: string[] = [
    "about",
    "experience",
    "projects",
    "education",
  ];
  const [currentBtn, setCurrentBtn] = useState<string>("");

  // Set default displayed section depending on devices
  useEffect(() => {
    scrollToSection("my-name");
    if (window.innerWidth < 768) {
      scrollToSection("my-name");
    } else {
      scrollToSection("about");
      setCurrentBtn("about");
    }
  }, []);

  return (
    <div className="flex flex-col items-start gap-4 text-[1rem]">
      {buttonNames.map((btnName, index) => (
        <div
          key={index}
          onClick={() => {
            setCurrentBtn(btnName);
            scrollToSection(btnName);
          }}
          className={`grid w-full items-center justify-items-start gap-4
        hover:cursor-pointer hover:text-white hover:grid-cols-[20%_1fr] 
        transition-all duration-200 ease-in-out group
         ${
           currentBtn === btnName
             ? "grid-cols-[20%_1fr] text-white"
             : "grid-cols-[10%_1fr] text-gray-500 "
         }`}
        >
          <div
            className={`w-full h-[1px]  group-hover:bg-white
          ${currentBtn === btnName ? "bg-white" : "bg-gray-500"}`}
          ></div>
          <div className="uppercase">{btnName}</div>
        </div>
      ))}
    </div>
  );
}
