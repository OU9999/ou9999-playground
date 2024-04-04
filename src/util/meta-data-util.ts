import { SectionData } from "@/constant/section-data";

export const getMetaDataFromSectionData = (sectionData: SectionData) => {
  const title = `${sectionData?.title} | ou`;
  const description = `${sectionData?.description} | ou`;
  const thumbnail = `/imgs/thumbnail/${sectionData?.image}.png`;
  return { title, description, thumbnail };
};
