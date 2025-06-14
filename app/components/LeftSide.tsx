// "use client";

import NavButtons from "./NavButtons";

export default function LeftSide() {
  return (
    <div
      className="flex flex-col gap-8 justify-between px-6 py-10 
    md:px-20 md:py-24 md:h-[100vh] "
    >
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">Minh Luc</h1>
          <p>Front End Developer</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="hidden md:block">
          <NavButtons />
        </div>
      </div>
      <div>Icon Icon</div>
    </div>
  );
}
