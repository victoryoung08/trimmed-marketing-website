import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard/CaseStudyCard";

const CaseStudies = () => {
  const caseStudyData = [
    {
      name: "Mancave Barbershop Australia",
      tags: ["Content", "Paid Ads", "Create & Convert"],
      imgSrc: "",
      description:
        "How we've helped Mancave Barbershop grow and open 4 more stores while reaching millions of people every month with Instagram, Tiktok, Youtube and Google SEO",
    },
    {
      name: "Strong Living EP",
      tags: ["Social Media Strategy", "Create Content"],
      imgSrc: "",
      description:
        "How we helped build a stronger authority and social media presence for an Exercise Physiology business",
    },
  ];
  return caseStudyData.map((cs) => <CaseStudyCard key={cs.name} data={cs} />);
};

export default function page() {
  return (
    <main>
      <section className="h-[70vh]">
        <h1>
          We work with businesses to connect with customers they love working
          with
        </h1>
      </section>
      <section>
        <CaseStudies />
      </section>
    </main>
  );
}
