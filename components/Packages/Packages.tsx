import styles from "./Packages.module.css";
import CTAButton from "@/components/ui/CTAButton/CTAButton";
export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Create Content",
      features: [
        "20x Posts/month (photo or videos)",
        "Film, produce and edit all content",
        "We'll handle what you post and the strategy",
        "We'll manage your social media",
      ],
      price: "A$2500 + GST",
    },
    {
      id: 2,
      title: "Create Content & Convert",
      features: [
        "Everything included in Create Content",
        "Update and maintain your website",
        "Build landing pages for promotions or ads",
        "Rank higher on Google with SEO",
      ],
      price: "A$3500 + GST",
    },
  ];

  const featuresComponent = packages.map((pack) => (
    <div key={pack.id} className={styles.packages}>
      <div className="">
        <h2>{pack.title}</h2>
      </div>
      <ul>
        {pack.features.map((feat) => (
          <li key={feat}>{feat}</li>
        ))}
      </ul>
      <span>{pack.price}/month</span>
      <CTAButton cta="/">Get Started</CTAButton>
    </div>
  ));
  return (
    <section className="my-12">
      <div className="flex gap-6">{featuresComponent}</div>
    </section>
  );
}
