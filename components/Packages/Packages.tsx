import styles from "./Packages.module.css";
import CTAButton from "@/components/ui/CTAButton/CTAButton";
import cube from "@/public/cube.svg";
import Image from "next/image";
export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Create Content",
      features: [
        "20x Posts/month (photo or videos)",
        "Film, produce and edit all content",
        "Develop your social media strategy",
        "We'll manage your social media",
      ],
      price: "A$2500",
    },
    {
      id: 2,
      title: "Convert",
      features: [
        "Everything included in Create Content",
        "Update and maintain your website",
        "Build landing pages for promotions or ads",
        "Rank higher on Google with SEO",
      ],
      price: "A$3500",
    },
  ];

  const featuresComponent = packages.map((pack) => (
    <div key={pack.id} className={styles.packages}>
      <div>
        <h2 className="mb-8">{pack.title}</h2>
        <div className="mb-8">
          <span className="text-3xl font-semibold">{pack.price}</span>
          <span className="font-light text-md"> +GST/month</span>
        </div>
        <div className="w-full border-t-[0.5px] my-8 opacity-30"></div>
      </div>
      <div className="h-fit">
        <h3 className="text-xl font-semibold my-4">Features</h3>
        <ul className="flex flex-col gap-4">
          {pack.features.map((feat) => (
            <li key={feat} className="flex gap-2">
              <Image src={cube} width={100} height={100} className="max-w-4" />
              {feat}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <CTAButton>Get Started</CTAButton>
      </div>
    </div>
  ));
  return (
    <section className={styles.section}>
      <div className="flex w-fit mx-auto">{featuresComponent}</div>
    </section>
  );
}
