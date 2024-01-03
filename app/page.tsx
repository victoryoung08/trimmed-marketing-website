import Link from "next/link";

import Features from "@/components/Features";
import Packages from "@/components/Packages/Packages";
import VideoGrid from "@/components/VideoGrid/VideoGrid";
import CTAButton from "@/components/ui/CTAButton/CTAButton";

export default async function Home() {
  return (
    <main className="pb-36">
      <header className="h-fit py-24 px-8 flex flex-col gap-16 justify-around mx-auto md:max-w-[600px]">
        {/* Header */}
        <h1 className="text-center">
          Find more customers <br /> you{" "}
          <span className="text-primary">love</span> to work with
        </h1>
        {/* Grid */}
        <VideoGrid />
        {/* Button Block */}
        <div className="flex flex-col items-center gap-4">
          <CTAButton cta="/">Explore Packages</CTAButton>
          <Link href="/contact" className="text-link">
            Book a calln
          </Link>
        </div>
      </header>
      {/* Logos */}
      <section>
        <div className="bg-textDark h-20"></div>
      </section>
      <Features />
      <section className="my-1npm">
        <div className="text-center">
          <h2>
            Customers who <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45EFE5] to-primary">
              tell their friends about you
            </span>
            <br />
            <span>❤️‍🔥</span>
          </h2>
          <p>
            We build likeable & relatable brands <br />
            customers can&apos;t help but share
          </p>
        </div>
      </section>
      <Packages />
    </main>
  );
}
