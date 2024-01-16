"use client";
import styles from "./Features.module.css";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
    {
      id: 5,
      title: "Video Podcasts",
      content: "Elevate your brand with video podcasts",
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
    <section className="px-6 py-12 lg:px-48">
      <div className="flex flex-col lg:flex-row">
        <div className="text-center my-12 mx-auto w-full">
          <h2 className="text-3xl">
            Your Plug-in
            <br /> Digital Marketing Team <br /> to reach more customers
          </h2>
        </div>
        {/* <swiper-container className="flex overflow-x-auto gap-8 lg:grid-cols-2"> */}
        <div className={`w-full py-8 ${styles.boxShadow} relative`}>
          <div className={`${styles.boxShadowLeft}`}></div>
          <Splide
            options={{
              gap: "32px",
              drag: true,
              arrows: false,
              trimSpace: false,
              padding: "20%",
              focus: "center",
              start: 1,
              fixedWidth: "80%",
            }}
          >
            {features.map((feat) => (
              <SplideSlide key={feat.id}>
                <div className="flex flex-col gap-4 w-full text-center">
                  <h4 className="text-xl font-semibold">{feat.title}</h4>
                  <p className="text-md text-[#8C929E]">{feat.content}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}
