import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Social Media Content",
      content:
        "We'll film, produce and edit your social media content, meaning less of your time spent in the Reels Editing app and more time on your business",
      imgSrc: "",
    },
    {
      id: 2,
      title: "Website Development",
      content:
        "Build a website that not only looks great but converts great. We'll handle the technical stuff and do all the photography and videography required for your website.",
      imgSrc: "",
    },
    {
      id: 3,
      title: "SEO & Google My Business",
      content:
        "We'll create and implement an SEO strategy to help your business be more visible to customers. This means ranking higher on search terms and Google Maps.",
      imgSrc: "",
    },
    {
      id: 4,
      title: "Social Media Strategy & Management",
      content:
        "We'll create the strategy which aligns with your business and your customers wants and needs. We'll come up with all content ideas and manage your community so you can focus on serving customers",
      imgSrc: "",
    },
  ];

  const featuresComponent = features.map((feat) => (
    <div
      key={feat.id}
      className="p-8 border-[1px] border-[#34410F] rounded-2xl"
    >
      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-semibold">{feat.title}</h4>
        <p className="text-md text-[#8C929E]">{feat.content}</p>
      </div>
      <div></div>
    </div>
  ));

  return (
    <section className="px-6 py-12 lg:px-48">
      <div className="text-center my-12">
        <h2 className="text-3xl">
          Your Plug-in
          <br /> Digital Marketing Team <br /> to reach more customers
        </h2>
        <button className="btn secondary">Get started</button>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-2">
        {featuresComponent}
      </div>
    </section>
  );
}
