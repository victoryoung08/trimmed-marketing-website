import React from "react";
import { getCaseStudyPageData, getAssetDetails } from "@/utils/contentful";
import Image from "next/image";

interface ParamsProps {
  params: {
    id: string;
  };
}

export default async function CaseStudyPage({ params }: ParamsProps) {
  // use the params to find the specific entry
  const { items: data } = await getCaseStudyPageData("slug", params.id);
  const cs = data[0].fields;
  const heroImage = await getAssetDetails(cs.heroImage.sys.id);
  const challenges = cs.challenges.content[0].content[0].value;
  console.log(challenges);
  return (
    <main>
      {/* <div>hello</div> */}
      <header>
        <h1>{cs.name}</h1>
        <Image src={heroImage} width={3000} height={2000} alt={cs.name} />
      </header>
      <section className="py-16 flex flex-col gap-2">
        <h2>Services</h2>
        <div className="grid grid-cols-2 gap-2">
          {cs.tags.map((tag: string) => {
            return (
              <div
                className="w-full h-fit py-4 border rounded-md flex items-center justify-center"
                key={tag}
              >
                {tag}
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-16 flex flex-col gap-2 ">
        <h2>Challenges</h2>
        <p>{challenges}</p>
      </section>
    </main>
  );
}
