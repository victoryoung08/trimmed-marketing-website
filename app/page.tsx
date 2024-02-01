import Link from "next/link";

import Features from "@/components/Features/Features";
import Packages from "@/components/Packages/Packages";
import VideoGrid from "@/components/VideoGrid/VideoGrid";
import CTAButton from "@/components/ui/CTAButton/CTAButton";
import LeadForm from "@/components/ui/LeadForm/LeadForm";
import Logos from "@/components/Logos/Logos";
import HandDrawnCircle from "@/components/HandDrawnCircle/HandDrawnCircle";
import SubCTA from "@/components/SubCTA/SubCTA";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import FeatureRow from "@/components/FeatureRow/FeatureRow";

// actions

export default async function Home() {
  return (
    <main className="pb-36">
      <header
        className="h-fit
       px-1 flex flex-col gap-8 mx-auto sm:text-center"
      >
        <h1 className="font-bold">
          Get more customers <br /> you{" "}
          <span className="text-primary">love</span> to work with
        </h1>
        <div>
          <p>
            Build and convert your following into customers who pay your prices
            and choose you over your competition.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <CTAButton>Book a call</CTAButton>
        </div>
      </header>
      <Logos />
      <Features />
      <VideoGrid />
      <FeatureRow />
      {/* <SubCTA /> */}

      <Packages />
      <LeadForm />
    </main>
  );
}
