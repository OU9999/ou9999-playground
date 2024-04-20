import ContentRightSection from "@/components/rightSection/content-right-section";
import { getSectionDataByLink } from "@/util/section-data-util";

const VACRightSection = () => {
  const sectionData = getSectionDataByLink("vac");

  return (
    <ContentRightSection
      inspired={sectionData?.inspired!}
      dependencies={sectionData?.dependencies!}
    />
  );
};

export default VACRightSection;
