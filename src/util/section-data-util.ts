import { allSectionData } from "@/constant/section-data";

export const getSectionDataByLink = (link: string) => {
  const sectionData = allSectionData.find((data) => data.link === link);

  return sectionData;
};
