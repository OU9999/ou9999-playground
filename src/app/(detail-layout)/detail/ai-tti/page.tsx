import AiTextToImage from "@/components/mainSection/ai-tti/ai-text-to-image";
import { getSectionDataByLink } from "@/util/section-data-util";

export const generateMetadata = () => {
  const sectionData = getSectionDataByLink("ai-tti");
  const title = `${sectionData?.title} | ou`;
  const description = `${sectionData?.description} | ou`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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
