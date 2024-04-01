import { getAllSectionDataByBadge } from "@/util/section-data-util";
import { allSectionData } from "@/constant/section-data";
import MainCard from "../ui/main-card";

interface CardGridProps {
  content: string;
}

const CardGrid = ({ content }: CardGridProps) => {
  const sectionData =
    content === "all" ? allSectionData : getAllSectionDataByBadge(content);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-1">
      {sectionData.map((data) => (
        <MainCard
          key={"card" + data.link}
          title={data.title}
          badge={data.badge}
          link={data.link}
          image={data.image}
        />
      ))}
    </div>
  );
};

export default CardGrid;
