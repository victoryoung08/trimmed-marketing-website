import styles from "./Features.module.css";
import IconCubes from "@/components/ui/IconCubes";

export default function Features() {
  const features = [
    {
      id: 1,
      tag: "Social Media Marketing",
      title: "Reach new audiences and turn followers into customers",
      content:
        "We'll create content to show customers you're business is the right solution for them. Our goal is to get you the right customers who fit your values, prices and genuinely want your services - without the need for discounts",
      imgSrc: "",
    },
    {
      id: 2,
      tag: "Web Development",
      title: "Build a website that converts",
      content:
        "Funnel your social media followers to your website that does the heavy lifting at qualifying your customers. We want you to work with more customers you love.",
      imgSrc: "",
    },
    {
      id: 3,
      tag: "SEO",
      title: "Rank higher on Google and Maps",
      content:
        "Be at the top of your customers search and Google Maps. We'll help you appear higher and higher.",
      imgSrc: "",
    },
    {
      id: 4,
      tag: "Video Podcasts",
      title: "Build a close community with podcasts",
      content:
        "Streamline your content creation with a format more and more customers love.",
    },
  ];

  // const featuresComponent = features.map((feat) => (
  //   <swiper-slide
  //     key={feat.id}
  //     className="w-fit min-w-64 first-line p-8 border-[1px] border-[#34410F] rounded-2xl"
  //   >
  //     <div className="flex flex-col gap-4 w-full">
  //       <h4 className="text-xl font-semibold">{feat.title}</h4>
  //       <p className="text-md text-[#8C929E]">{feat.content}</p>
  //     </div>
  //   </swiper-slide>
  // ));

  return (
    <section className="global-padding">
      <div className="flex flex-col">
        <div className="text-center my-12 mx-auto w-full">
          <h2 className="text-3xl">
            Build a brand on social and convert followers into leads
          </h2>
          <p>
            We create social media content to help customers choose you. We
            build websites and landing pages to make sure you're attracting the
            right customers fit for your business.
          </p>
        </div>
        {/* <swiper-container className="flex overflow-x-auto gap-8 lg:grid-cols-2"> */}
      </div>
      <div>
        {features.map((feat) => (
          <div
            className="flex flex-col px-6 py-8 mx-auto gap-4 relative border-l-2 max-w-[75%]"
            key={feat.title}
          >
            <IconCubes
              className="absolute top-[-12px] left-[-12px] bg-black"
              width="24px"
            />
            <div className=" flex flex-col justify-center">
              <h3 className="text-2xl font-medium">{feat.tag}</h3>
              <p className="text-lg">{feat.title}</p>
            </div>
            <p className="text-zinc-300">{feat.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
