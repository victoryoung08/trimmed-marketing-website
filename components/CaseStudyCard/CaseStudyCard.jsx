import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getAssetDetails } from "@/utils/contentful";
export default async function CaseStudyCard({ data }) {
  const heroImage = data.fields.heroImage;
  let heroImageSrc;
  if (heroImage) {
    const id = heroImage.sys.id;
    heroImageSrc = await getAssetDetails(id);
  }
  return (
    <div className="mb-24 flex flex-col gap-4  max-w-[60%] mx-auto">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {data?.fields?.tags?.map((tag) => (
            <span key={tag} className="border-[0.5px] p-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="font-semibold">{data.fields.name}</h2>
      </div>
      <div className="rounded-xl overflow-hidden">
        {heroImageSrc && (
          <Image
            src={heroImageSrc}
            width={3000}
            height={2000}
            style={{ objectFit: "cover" }}
            alt={data.fields.name}
            className="bg-white w-full aspect-[3/2]"
          />
        )}
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
