import { JobProps } from "../constant/myInfo";

export default function JobCard({ job }: { job: JobProps }) {
  return (
    <div
      className="flex flex-col sm:grid sm:grid-cols-[30%_1fr] gap-0 sm:gap-4 items-start
       hover:bg-blue-300/10 hover:shadow-sm shadow-white/20 transition-all duration-300 ease-in-out
       sm:px-4 sm:py-6 rounded-xl"
    >
      {" "}
      <div className="text-gray-400 text-[1rem] md:text-[1.1rem]">
        {job.time}
      </div>
      <div className="flex flex-col">
        <div className="font-semibold text-[1.1rem] md:text-[1.2rem]">
          {job.title}
        </div>
        <div className="md:text-[1.2rem]">{job.company}</div>
        <div className="text-gray-400 leading-normal my-2 mb-3 md:text-[1.1rem]">
          {job.description}
        </div>
        <div className="flex gap-2 flex-wrap">
          {job.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-green-300/20 rounded-[10px] px-2
            text-[.9rem] md:text-[1rem] text-cyan-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
