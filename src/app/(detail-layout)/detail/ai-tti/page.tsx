import AiTextToImage from "@/components/mainSection/ai-tti/ai-text-to-image";
import { getMetaDataFromSectionData } from "@/util/meta-data-util";
import { getSectionDataByLink } from "@/util/section-data-util";

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
    </div>
  );
};

export default AiTtiDetailPage;
