export interface SectionData {
  title: string;
  link: string;
  description: string;
  badge: "ui" | "engineering";
  inspired: string;
  dependencies: string[];
  date: number;
  image?: string;
  published: boolean;
}

const crossFadeSectionData: SectionData = {
  title: "Carousel Crossfade",
  link: "cross-fade",
  description: "네이버 웹툰 스타일 크로스 페이드 트랜지션",
  badge: "ui",
  inspired: "네이버 웹툰 앱",
  dependencies: ["embla-carousel-react@^8.0.0"],
  date: 20240327,
  image: "cross-fade",
  published: true,
};

const aiTtiSectionData: SectionData = {
  title: "AI text-to-image Generator",
  link: "ai-tti",
  description: "text to image",
  badge: "engineering",
  inspired: "디시인사이드 ai 이미지 간편 등록",
  dependencies: [
    "replicate@^0.29.1",
    "stable-diffusion:ac732df8",
    "sdxl:39ed52f2",
  ],
  date: 20240326,
  image: "ai-tti",
  published: true,
};

const allData = [crossFadeSectionData, aiTtiSectionData];

const allFilteredData = allData.filter((data) => data.published);

export const allSectionData = allFilteredData.sort((a, b) => b.date - a.date);
