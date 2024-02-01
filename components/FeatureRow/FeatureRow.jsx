import Image from "next/image";

const features = [
  {
    heading: "Posting consistently isn't enough",
    text: "Customers want to know why you're the best solution. How you're better than a competitor. We'll create content that shows exactly this so you're the first they think about if they have a problem",
  },
  {
    heading: "Turn your followers into customers",
    text: "We'll design you landing pages (aka link in bio) which has a core goal of converting followers from social into leads.",
  },
  {
    heading: "Build a consistent lead generation system",
    text: "After creating a strong social media presence, we'll run paid ads so you're always in contact with potential customers ",
  },
];
export default function FeatureRow() {
  return (
    <>
      {features.map((feature, index) => (
        <>
          <section
            className={`flex flex-col h-full py-12 gap-8 max-w-[80%] mx-auto ${
              index % 2 === 0 ? "md:flex-row-reverse" : null
            } md:flex-row`}
          >
            <div className="w-full h-[200px] bg-white"></div>
            {/* <Image src="" fill /> */}
            <div className="flex flex-col  w-full gap-4 justify-center">
              <h3 className="text-3xl font-medium">{feature.heading}</h3>
              <p>{feature.text}</p>
            </div>
          </section>
        </>
      ))}
    </>
  );
}
