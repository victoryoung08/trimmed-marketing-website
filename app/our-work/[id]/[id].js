import { getCaseStudiesId } from "@/utils/contentful";
export async function getStaticsPaths() {
  const paths = getCaseStudiesId().map((cs) => ({
    params: { id: cs.id },
  }));
  console.log(paths);
}
