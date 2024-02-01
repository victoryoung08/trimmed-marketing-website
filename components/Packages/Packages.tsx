import styles from "./Packages.module.css";
import CTAButton from "@/components/ui/CTAButton/CTAButton";
import cube from "@/public/cube.svg";
import Image from "next/image";
import BookCall from "@/components/BookACall/BookCall";
export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Create Content",
      description: "Social Media Content & Management",
      features: [
        "20x Posts/month (photo or videos)",
        "Film, produce and edit all content",
        "Develop your social media strategy",
        "We'll manage your social media",
      ],
      price: "A$2500",
      paymentLink: "https://buy.stripe.com/4gwg0mc7m7Sp9sQfYZ",
    },
    {
      id: 2,
      title: "Create & Convert",
      description: "Social Media, Paid Ads and Google SEO",

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
      <div
        className={
          pack.id === 1
            ? styles.radialGradientCreate
            : styles.radialGradientConvert
        }
      ></div>
      <div className="w-full">
        <div>
          <div className="flex flex-col gap-4 mb-8">
            <h2>{pack.title}</h2>
            <p>{pack.description}</p>
          </div>
          <div className="mb-8">
            <span className="text-3xl font-semibold">{pack.price}</span>
            <span className="font-light text-md"> +GST/month</span>
          </div>
          <div className="w-full border-t-[0.5px] my-8 opacity-30"></div>
        </div>
      </div>
      <div>
        <div className="h-64">
          <h3 className="text-xl font-semibold my-4">Features</h3>
          <ul className="flex flex-col gap-4">
            {pack.features.map((feat) => (
              <li key={feat} className="flex gap-2">
                <Image
                  alt={feat}
                  src={cube}
                  width={100}
                  height={100}
                  className="max-w-4"
                />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        {/* <button className="bg-primary p-4 text-textDark font-medium rounded-xl">
          Get Started
        </button> */}
        {/* <BookCall /> */}
      </div>
    </div>
  ));
  return (
    <section id="packages" className={styles.section}>
      <div className="flex flex-col w-fit gap-8 mx-auto md:flex-row">
        {featuresComponent}
      </div>
    </section>
  );
}
