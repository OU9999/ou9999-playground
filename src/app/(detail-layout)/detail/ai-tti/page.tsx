import AiTextToImage from "@/components/mainSection/ai-tti/ai-text-to-image";
import AiProgress from "@/components/mainSection/ai-tti/ai-tti-progress";

import { getMetaDataFromSectionData } from "@/util/meta-data-util";
import { getSectionDataByLink } from "@/util/section-data-util";
import Link from "next/link";

export const generateMetadata = () => {
  const sectionData = getSectionDataByLink("ai-tti");
  const { title, description, thumbnail } = getMetaDataFromSectionData(
    sectionData!
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: {
        url: thumbnail,
      },
    },
  };
};

const AiTtiDetailPage = () => {
  return (
    <div className="w-full h-auto min-h-dvh">
      <AiTextToImage />
      <AiProgress />
    </div>
  );
};

export default AiTtiDetailPage;
