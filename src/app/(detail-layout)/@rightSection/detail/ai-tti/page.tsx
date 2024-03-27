import ContentRightSection from "@/components/rightSection/content-right-section";
import { getSectionDataByLink } from "@/util/section-data-util";

const AiTtiRightSection = () => {
  const sectionData = getSectionDataByLink("ai-tti");

  return (
    <ContentRightSection
      inspired={sectionData?.inspired!}
      dependencies={sectionData?.dependencies!}
    />
  );
};

export default AiTtiRightSection;
