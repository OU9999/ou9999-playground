import ContentRightSection from "@/components/rightSection/content-right-section";
import { getSectionDataByLink } from "@/util/section-data-util";

const OCRRightSection = () => {
  const sectionData = getSectionDataByLink("ocr");

  return (
    <ContentRightSection
      inspired={sectionData?.inspired!}
      dependencies={sectionData?.dependencies!}
    />
  );
};

export default OCRRightSection;
