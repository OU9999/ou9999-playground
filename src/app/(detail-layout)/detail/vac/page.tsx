import AgentSelect from "@/components/mainSection/vac/agent-select";
import { getMetaDataFromSectionData } from "@/util/meta-data-util";
import { getSectionDataByLink } from "@/util/section-data-util";

export const generateMetadata = () => {
  const sectionData = getSectionDataByLink("vac");
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

const VACDetailPage = () => {
  return (
    <div className="w-full h-auto min-h-dvh">
      <AgentSelect />
    </div>
  );
};

export default VACDetailPage;
