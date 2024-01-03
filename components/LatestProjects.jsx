import VideoModal from "@/components/VideoModal/VideoModal";
export default function LatestProjects({ videoData }) {
  return (
    <div className="grid grid-cols-3 items-center gap-4">
      {videoData.map((vid) => (
        <VideoModal video={vid} key={vid.uri} />
      ))}
    </div>
  );
}
