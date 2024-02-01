import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function ShadowSwiper() {
  return (
    <div className={`w-full py-12 ${styles.boxShadow} relative`}>
      <div className={`${styles.boxShadowLeft}`}></div>
      <Splide
        options={{
          gap: "32px",
          drag: true,
          arrows: false,
          trimSpace: false,
          padding: "30%",
          focus: "center",
          start: 1,
          pagination: false,
          fixedWidth: "80%",
          type: "loop",
        }}
      >
        {features.map((feat) => (
          <SplideSlide key={feat.id}>
            <div className="flex flex-col gap-4 w-full text-center items-center justify-center">
              <h4 className="text-xl font-regular">{feat.title}</h4>
              {/* <p className="text-md text-[#8C929E]">{feat.content}</p> */}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
