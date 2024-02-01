import { access } from "fs";
import { revalidatePath } from "next/cache";

const contentful = require("contentful");

const base_url = "https://cdn.contentful.com";
const space = process.env.CONTENTFUL_SPACE;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const accessToken = process.env.CONTENTFUL_ACCESSTOKEN;
const contentType = process.env.CONTENTFUL_CONTENT_TYPE;
export const getCaseStudies = async () => {
  const res = await fetch(
    `${base_url}/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`,
    {
      method: "GET",
      cache: "no-store",
      // next: { tags: ["caseStudies"] },
    }
  );

  const data = await res.json();
  return data;

  // client
  //   .getEntry("6Snm3lJHfnoN2rfeUe0hj1")
  //   .then((entry) => console.log(entry))
  //   .catch(console.error);
};

export const getCaseStudy = async (id) => {
  const res = await fetch(
    `${base_url}/spaces/${space}/environments/${environment}/entries/${id}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  return data;
};

export const getCaseStudiesId = async () => {
  // const caseStudies = await getCaseStudies();
  // const paths = caseStudies.map((cs) => cs.sys.id);
  // return {
  //   paths,
  //   fallback: false,
  // };
};

export const getAssetDetails = async (assetId) => {
  const res = await fetch(
    `${base_url}/spaces/${space}/environments/${environment}/assets/${assetId}?access_token=${accessToken}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  const assetURL = data.fields.file.url;
  return `https:${assetURL}`;
};

export const getCaseStudyPageData = async (query, value) => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/master/entries?access_token=${accessToken}&content_type=caseStudies&fields.${query}=${value}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(error);
  }
};

// export const getLogos = async (query) => {
//   try {
//     console.log("query:", query);
//     const res = await fetch(
//       `${base_url}/spaces/${space}/environments/master/entries?access_token=${accessToken}&metadata.tags.sys.id[all]=${query}`
//       // `${base_url}/spaces/${space}/environments/${environment}/tags`,
//       // {
//       //   headers: { Authorization: `Bearer ${accessToken}` },
//       // }
//     );
//     const data = await res.json();
//     return data.items;
//   } catch (err) {
//     console.error("An error with fetching logos");
//   }
// };
