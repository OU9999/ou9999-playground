import { allSectionData } from "@/constant/section-data";

export const getSectionDataByLink = (link: string) => {
  const sectionData = allSectionData.find((data) => data.link === link);

  return sectionData;
};

interface TabsCount {
  tab: string;
  count: number;
}

export const getTabsFromSectionData = () => {
  const badgesCount: { [key: string]: number } = {};
  const allData = allSectionData;
  allData.forEach((data) => {
    if (badgesCount[data.badge]) {
      badgesCount[data.badge] += 1;
    } else {
      badgesCount[data.badge] = 1;
    }
  });

  console.log(badgesCount);
  const tabsCountArray: TabsCount[] = Object.entries(badgesCount).map(
    ([tab, count]) => ({
      tab,
      count: Number(count),
    })
  );

  tabsCountArray.sort((a, b) => {
    if (b.count === a.count) {
      return a.tab.localeCompare(b.tab);
    }
    return b.count - a.count;
  });

  return tabsCountArray;
};

export const getAllSectionDataByBadge = (badge: string) => {
  const data = allSectionData.filter((data) => data.badge === badge);
  return data;
};
