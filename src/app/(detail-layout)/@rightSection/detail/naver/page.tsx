import ContentRightSection from "@/components/rightSection/content-right-section";
import { getSectionDataByLink } from "@/util/section-data-util";

const NaverRightSection = () => {
  const sectionData = getSectionDataByLink("naver");

  return (
    <ContentRightSection
      inspired={sectionData?.inspired!}
      dependencies={sectionData?.dependencies!}
    />
  );
};

export default NaverRightSection;
