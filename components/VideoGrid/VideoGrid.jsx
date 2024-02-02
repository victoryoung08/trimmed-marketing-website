import { getVimeoVideos } from "@/app/actions/fetchVideo";
import VideoModal from "@/components/VideoModal/VideoModal";
import styles from "./VideoGrid.module.css";
const client_id = process.env.VIMEO_CLIENT_ID;
const client_secret = process.env.VIMEO_CLIENT_SECRET;
const access_token = process.env.VIMEO_ACCESS_TOKEN;
const user_id = "154850236";
const folder_id = "18952794";
const gridPosition = [
  {
    position: 0,
    styles: `${styles.gridCell}`,
  },
  {
    position: 1,
    styles: `${styles.gridCell}`,
  },
  {
    position: 2,
    styles: `${styles.gridCell}`,
  },
  {
    position: 3,
    styles: `${styles.gridCell}`,
  },
  {
    position: 4,
    styles: `${styles.gridCell}`,
  },
  {
    position: 5,
    styles: `${styles.gridCell}`,
  },
];
export default async function VideoGrid() {
  const { data: vimeoVideos } = await getVimeoVideos({
    user_id,
    folder_id,
  });
  if (vimeoVideos) {
    const sixVideos = vimeoVideos.slice(0, 6);
    return (
      <div className="grid grid-cols-3 grid-rows-3 gap-1 w-fit mx-auto max-h-[600px] md:max-w-[600px]">
        {sixVideos.map((video, index) => {
          const gridStyle =
            gridPosition.find((pos) => pos.position === index)?.styles ||
            "grid-cell";
          return (
            <div key={video.uri} className={gridStyle}>
              <VideoModal video={video} />
            </div>
          );
        })}
      </div>
    );
  }
}
