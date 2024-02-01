import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard/CaseStudyCard";

import { getCaseStudies, getCaseStudiesId } from "@/utils/contentful";

const CaseStudiesCard = async () => {
  // get all entries from cms
  const { items } = await getCaseStudies();
  const caseStudyData = items.filter((i: any) => i.fields.title !== "logos");
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
