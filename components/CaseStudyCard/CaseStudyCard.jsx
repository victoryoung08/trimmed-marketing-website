import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getAssetDetails } from "@/utils/contentful";
export default async function CaseStudyCard({ data }) {
  const heroImageId = data.fields.heroImage.sys.id;
  const heroImage = await getAssetDetails(heroImageId);
  return (
    <div className="mb-24 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {data.fields.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h2>{data.fields.name}</h2>
      </div>
      <div className="rounded-xl overflow-hidden">
        <Image
          src={heroImage}
          width={3000}
          height={2000}
          style={{ objectFit: "cover" }}
          alt={data.fields.name}
          className="bg-white w-full aspect-[3/2]"
        />
      </div>
      <p>{data.description}</p>
      <div>
        <Link
          href={{
            pathname: `/our-work/${data.fields.slug}`,
          }}
          className="flex flex-row w-full items-center"
        >
          <p>Read Case Study</p>
          <IoIosArrowRoundForward size="2rem" />
        </Link>
      </div>
    </div>
  );
}
