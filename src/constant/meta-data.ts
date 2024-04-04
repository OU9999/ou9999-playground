import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

const defaultTitle = "OU's PLAYGROUND";
const defaultDescription = "호기심을 담아서";

export const defaultOpenGraph: OpenGraph = {
  type: "website",
  title: defaultTitle,
  description: defaultDescription,
  images: {
    url: "/imgs/openGraph/default.png",
    width: 1200,
    height: 630,
  },
};

export const defaultTwitter: Twitter = {
  card: "summary_large_image",
  site: "@OU9999",
  title: defaultTitle,
  description: defaultDescription,
  images: ["/imgs/openGraph/default.png"],
};
