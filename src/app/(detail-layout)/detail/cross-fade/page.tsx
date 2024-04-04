import CrossFadeTransition from "@/components/mainSection/cross-fade/cross-fade-transition";
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

const CrossFadeDetailPage = () => {
  return (
    <div className="w-full h-auto min-h-dvh">
      <CrossFadeTransition />
    </div>
  );
};

export default CrossFadeDetailPage;
