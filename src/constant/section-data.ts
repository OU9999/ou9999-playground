export interface SectionData {
  title: string;
  link: string;
  description: string;
  badge: "ui" | "engineering";
  inspired: string;
  dependencies: string[];
  date: string;
}

const naverSectionData: SectionData = {
  title: "Naver Webtoon Transition",
  link: "naver",
  description: "네이버 웹툰 스타일 부드러운 트랜지션",
  badge: "ui",
  inspired: "네이버 웹툰 앱",
  dependencies: ["test"],
  date: "2024-03-27",
};

const aiTtiSectionData: SectionData = {
  title: "AI text-to-image Generator",
  link: "ai-tti",
  description: "text to image",
  badge: "engineering",
  inspired: "디시인사이드 ai 이미지 간편 등록",
  dependencies: ["test"],
  date: "2024-03-27",
};

export const allSectionData = [naverSectionData, aiTtiSectionData];
