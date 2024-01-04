import React from "react";
import { getCaseStudiesId, getCaseStudy } from "@/utils/contentful";

interface ParamsProps {
  params: {
    id: string;
  };
}

export default function CaseStudyPage({ params }: ParamsProps) {
  // use the params to find the specific entry
  const entry = getCaseStudy(params.id);
  return <div>page</div>;
}
