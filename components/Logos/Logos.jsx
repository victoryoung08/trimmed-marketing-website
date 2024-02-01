"use client";
import cherub from "@/public/images/logos/cherub.png";
import credshare from "@/public/images/logos/credshare.png";
import ga from "@/public/images/logos/ga.png";
import mc from "@/public/images/logos/mc.png";
import oohmamii from "@/public/images/logos/oohmamii.png";
import studyspot from "@/public/images/logos/study-spot.png";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const logos = [
  {
    name: "studyspot",
    src: studyspot.src,
  },
  {
    name: "cherub",
    src: cherub.src,
  },
  {
    name: "credshare",
    src: credshare.src,
  },
  {
    name: "ga",
    src: ga.src,
  },
  {
    name: "mc",
    src: mc.src,
  },
  {
    name: "oohmamii",
    src: oohmamii.src,
  },
];

export default function Logos() {
  return (
    <div className="mx-auto py-20 lg:max-w-[60%]">
      <Splide
        options={{
          drag: true,
          arrows: false,
          trimSpace: false,
          padding: "30%",
          focus: "center",
          start: 1,
          pagination: false,
          fixedWidth: "80%",
          type: "loop",
          autoScroll: {
            speed: 0.7,
          },
        }}
        extensions={{
          AutoScroll,
        }}
      >
        {logos.map((logo) => (
          <SplideSlide key={logo.name}>
            <div className="relative w-28 h-20 flex items-center justify-center">
              <Image
                src={logo.src}
                key={logo.name}
                alt={logo.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
