import { getCaseStudies, getAssetDetails } from "@/utils/contentful";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
export default async function CaseStudySection() {
  const { items } = await getCaseStudies();
  const caseStudyData = items.filter((i) => i.fields.title !== "logos");
  const fields = caseStudyData.map((csd) => csd.fields);
  return fields.map(async (field, index) => {
    const imageSrc = await getAssetDetails(field.heroImage.sys.id);
    return (
      <div
        key={field.name}
        className={`flex flex-col gap-8 w-full p-12 rounded-xl max-w-[80%] mx-auto ${
          index % 2 === 0 && "bg-zinc-900"
        }`}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-medium">{field.name}</h3>
          <p>{field.resultsSnippet}</p>
        </div>
        <div>
          <Image
            src={imageSrc}
            alt={field.name}
            className="w-full rounded-xl"
            width={300}
            height={180}
          />
        </div>
        <Link href={`/our-work/${field.slug}`}>
          <Button className="btn">Learn More</Button>
        </Link>
      </div>
    );
  });
}
