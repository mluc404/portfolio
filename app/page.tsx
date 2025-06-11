import Image from "next/image";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function Home() {
  return (
    <div className="flex relative ">
      <div className="h-[100vh] w-[40%] sticky top-0">
        <LeftSide />
      </div>
      <div className="w-[60%]">
        <RightSide />
      </div>
    </div>
  );
}
