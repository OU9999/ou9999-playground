import ContentHeader from "@/components/headSection/content-header";
import { getSectionDataByLink } from "@/util/section-data-util";

const AiTtiHeadSection = () => {
  const sectionData = getSectionDataByLink("ai-tti");

  return (
    <ContentHeader
      title={sectionData?.title!}
      text={sectionData?.description!}
      badge={sectionData?.badge!}
    />
  );
};

export default AiTtiHeadSection;
