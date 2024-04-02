import ContentHeader from "@/components/headSection/content-header";
import { getSectionDataByLink } from "@/util/section-data-util";

const CrossFadeHeadSection = () => {
  const sectionData = getSectionDataByLink("cross-fade");

  return (
    <ContentHeader
      title={sectionData?.title!}
      text={sectionData?.description!}
      badge={sectionData?.badge!}
    />
  );
};

export default CrossFadeHeadSection;
