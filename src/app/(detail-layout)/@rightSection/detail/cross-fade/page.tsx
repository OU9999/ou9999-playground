import ContentRightSection from "@/components/rightSection/content-right-section";
import { getSectionDataByLink } from "@/util/section-data-util";

const CrossFadeRightSection = () => {
  const sectionData = getSectionDataByLink("cross-fade");

  return (
    <ContentRightSection
      inspired={sectionData?.inspired!}
      dependencies={sectionData?.dependencies!}
    />
  );
};

export default CrossFadeRightSection;
