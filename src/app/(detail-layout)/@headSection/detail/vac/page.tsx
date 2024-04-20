import ContentHeader from "@/components/headSection/content-header";
import { getSectionDataByLink } from "@/util/section-data-util";

const VACHeadSection = () => {
  const sectionData = getSectionDataByLink("vac");

  return (
    <ContentHeader
      title={sectionData?.title!}
      text={sectionData?.description!}
      badge={sectionData?.badge!}
    />
  );
};

export default VACHeadSection;
