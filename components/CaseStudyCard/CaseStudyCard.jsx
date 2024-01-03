import { IoIosArrowRoundForward } from "react-icons/io";

export default function CaseStudyCard({ data }) {
  return (
    <div className="mb-24 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {data.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h2>{data.name}</h2>
      </div>
      <div className="rounded-xl overflow-hidden">
        <img src="" alt="" className="bg-white w-full aspect-[3/2]" />
      </div>
      <p>{data.description}</p>
      <div>
        <div className="flex flex-row w-full items-center">
          <p>Read Case Study</p>
          <IoIosArrowRoundForward size="2rem" />
        </div>
      </div>
    </div>
  );
}
