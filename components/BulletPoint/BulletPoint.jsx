import Image from "next/image";
import cube from "@/public/cube.svg";

// interface BulletPointProps {
//   icon: any;
//   children: React.ReactNode;
// }

export default function BulletPoint({ alt, children }) {
  return (
    <div className="flex gap-2 items-center">
      <Image
        alt={alt}
        src={cube}
        width={100}
        height={100}
        className="max-w-4"
      />
      {children}
    </div>
  );
}
