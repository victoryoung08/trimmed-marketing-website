import Link from "next/link";

import Features from "@/components/Features/Features";
import Packages from "@/components/Packages/Packages";
import VideoGrid from "@/components/VideoGrid/VideoGrid";
import CTAButton from "@/components/ui/CTAButton/CTAButton";
import LeadForm from "@/components/ui/LeadForm/LeadForm";

// actions
import { getSubscribers } from "@/app/actions/mailerlite";

export default async function Home() {
  return (
    <main className="pb-36">
      <header className="h-fit py-24 px-8 flex flex-col gap-8 mx-auto md:max-w-[600px]">
        <h1 className="text-center font-bold">
          Find more customers <br /> you{" "}
          <span className="text-primary">love</span> to work with
        </h1>
        <div className="text-center">
          <p>Be the first when they Google you</p>
          <p>Build a community of customers on social media</p>
          <p>Create a website that generates and converts leads</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <CTAButton>Explore Packages</CTAButton>
          <Link href="/contact" className="text-link">
            Book a call
          </Link>
        </div>
      </header>
      <section>
        <div className="bg-textDark h-20"></div>
      </section>
      <Features />
      <VideoGrid />
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
      <LeadForm />
    </main>
  );
}
