import { SchoolProps } from "../constant/myInfo";

export default function SchoolCard({ school }: { school: SchoolProps }) {
  return (
    <div
      className="flex flex-col sm:grid sm:grid-cols-[30%_1fr] gap-0 sm:gap-4 items-start
       hover:bg-blue-300/10 sm:p-4 rounded-xl hover:shadow-sm shadow-white/20
       transition-all duration-200 ease-in-out"
    >
      {" "}
      <div className="hidden sm:block text-gray-400 text-[1rem] md:text-[1rem] ">
        {school.time}
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <div className="font-semibold text-[1.1rem] md:text-[1rem] ">
            {school.school}
          </div>
          <div className="sm:hidden text-gray-400 text-[1rem] ">
            {school.time}
          </div>
        </div>

        <div className="text-gray-400 leading-tight my-2 mb-3 italic md:text-[1rem]">
          {school.major}
        </div>
      </div>
    </div>
  );
}
