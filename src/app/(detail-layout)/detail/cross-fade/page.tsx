import CrossFadeTransition from "@/components/mainSection/cross-fade/cross-fade-transition";
import { getSectionDataByLink } from "@/util/section-data-util";

export const generateMetadata = () => {
  const sectionData = getSectionDataByLink("cross-fade");
  const title = `${sectionData?.title} | ou`;
  const description = `${sectionData?.description} | ou`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
};

const CrossFadeDetailPage = () => {
  return (
    <div className="w-full h-auto min-h-dvh">
      <CrossFadeTransition />
    </div>
  );
};

export default CrossFadeDetailPage;
