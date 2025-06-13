// "use client";

import NavButtons from "./NavButtons";

export default function LeftSide() {
  return (
    <div
      className="flex flex-col gap-8 justify-between 
    px-20 py-24 h-[100vh]"
    >
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">Minh Luc</h1>
          <p>Front End Developer</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <NavButtons />
      </div>
      <div>Icon Icon</div>
    </div>
  );
}
