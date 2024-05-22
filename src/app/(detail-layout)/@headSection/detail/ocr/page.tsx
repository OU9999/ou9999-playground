import ContentHeader from "@/components/headSection/content-header";
import { getSectionDataByLink } from "@/util/section-data-util";

const OCRHeadSection = () => {
  const sectionData = getSectionDataByLink("ocr");

  return (
    <ContentHeader
      title={sectionData?.title!}
      text={sectionData?.description!}
      badge={sectionData?.badge!}
    />
  );
};

export default OCRHeadSection;
