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
  date: 20240401,
  image: "cross-fade",
  published: true,
};

const aiTtiSectionData: SectionData = {
  title: "AI text-to-image Generator",
  link: "ai-tti",
  description: "next.js 서버 액션 + replicate",
  badge: "engineering",
  inspired: "디시인사이드 ai 이미지 간편 등록",
  dependencies: ["replicate@^0.29.1", "stable-diffusion@2.1", "sdxl@1"],
  date: 20240404,
  image: "ai-tti",
  published: true,
};

const valorantSectionData: SectionData = {
  title: "Valorant Agent Contract",
  link: "vac",
  description: "발로란트 스타일 Carousel",
  badge: "ui",
  inspired: "발로란트 요원 계약 UI",
  dependencies: ["embla-carousel-react@^8.0.0"],
  date: 20240419,
  image: "vac",
  published: true,
};

const allData = [crossFadeSectionData, aiTtiSectionData, valorantSectionData];

const allFilteredData = allData.filter((data) => data.published);

export const allSectionData = allFilteredData.sort((a, b) => b.date - a.date);
