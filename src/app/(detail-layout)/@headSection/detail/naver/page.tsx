import ContentHeader from "@/components/headSection/content-header";
import { getSectionDataByLink } from "@/util/section-data-util";

const NaverHeadSection = () => {
  const sectionData = getSectionDataByLink("naver");

  return (
    <ContentHeader
      title={sectionData?.title!}
      text={sectionData?.description!}
      badge={sectionData?.badge!}
    />
  );
};

export default NaverHeadSection;
