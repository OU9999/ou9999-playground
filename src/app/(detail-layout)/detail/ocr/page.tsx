import AgentSelect from "@/components/mainSection/vac/agent-select";
import { getMetaDataFromSectionData } from "@/util/meta-data-util";
import { getSectionDataByLink } from "@/util/section-data-util";

export const generateMetadata = () => {
  const sectionData = getSectionDataByLink("ocr");
  const { title, description, thumbnail } = getMetaDataFromSectionData(
    sectionData!
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: {
        url: thumbnail,
      },
    },
  };
};

const OCRDetailPage = () => {
  return <div className="w-full h-auto min-h-dvh">ocr</div>;
};

export default OCRDetailPage;
