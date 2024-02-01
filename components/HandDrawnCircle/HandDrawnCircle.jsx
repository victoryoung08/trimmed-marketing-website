import styles from "./HandDrawnCircle.module.css";

const roadmapContent = [
  {
    title: "Customer Research",
  },
  {
    title: "Marketing Strategy",
  },
  {
    title: "Film, produce and edit content",
  },
  {
    title: "Run paid ads on winning content",
  },
];

export default function Roadmap() {
  return (
    <div className="">
      {roadmapContent.map((process) => (
        <div className="border-1 w-fit p-2 rounded-xl my-8" key={process.title}>
          <span>{process.title}</span>
        </div>
      ))}
    </div>
  );
}
