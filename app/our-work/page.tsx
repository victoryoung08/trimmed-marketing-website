import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard/CaseStudyCard";

import { getCaseStudies, getCaseStudiesId } from "@/utils/contentful";

const CaseStudiesCard = async () => {
  // const caseStudyData = [
  //   {
  //     name: "Mancave Barbershop Australia",
  //     tags: ["Content", "Paid Ads", "Create & Convert"],
  //     imgSrc: "",
  //     description:
  //       "How we've helped Mancave Barbershop grow and open 4 more stores while reaching millions of people every month with Instagram, Tiktok, Youtube and Google SEO",
  //   },
  //   {
  //     name: "Strong Living EP",
  //     tags: ["Social Media Strategy", "Create Content"],
  //     imgSrc: "",
  //     description:
  //       "How we helped build a stronger authority and social media presence for an Exercise Physiology business",
  //   },
  // ];
  // get all entries from cms
  const { items: caseStudyData } = await getCaseStudies();
  console.log(caseStudyData);
  return caseStudyData.map((cs: any) => (
    <CaseStudyCard key={cs.name} data={cs} />
  ));
};

export default async function page() {
  const caseStudies = await getCaseStudies();
  const caseId = await getCaseStudiesId();

  return (
    <main>
      <section className="h-[70vh]">
        <h1>
          We work with businesses to connect with customers they love working
          with
        </h1>
      </section>
      <section>
        <CaseStudiesCard />
      </section>
    </main>
  );
}
