import { JobProps } from "../constant/myInfo";

export default function JobCard({ job }: { job: JobProps }) {
  return (
    <div className="flex w-full gap-4 hover:bg-blue-300/10">
      <div className="w-[30%]">{job.time}</div>
      <div className="flex flex-col">
        <div>
          {job.title} {job.company}
        </div>
        <div>{job.description}</div>
        <div className="flex gap-2">
          {job.skills.map((skill, index) => (
            <div key={index} className="bg-blue-400/50 rounded-[15px] px-2">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
