import Image from "next/image";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:relative ">
        <div className=" w-full md:w-[40%] md:h-[100vh] md:sticky md:top-0">
          <LeftSide />
        </div>
        <div className="w-full md:w-[60%] pb-0">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
