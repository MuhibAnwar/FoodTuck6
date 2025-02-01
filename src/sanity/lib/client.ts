import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "lpij8c6w",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
});

export default client;
