import { getAllSectionDataByBadge } from "@/util/section-data-util";
import Card from "../ui/card";
import { allSectionData } from "@/constant/section-data";

interface CardGridProps {
  content: string;
}

const CardGrid = ({ content }: CardGridProps) => {
  const sectionData =
    content === "all" ? allSectionData : getAllSectionDataByBadge(content);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-1">
      {sectionData.map((data) => (
        <Card
          key={"card" + data.link}
          title={data.title}
          badge={data.badge}
          link={data.link}
        />
      ))}
    </div>
  );
};

export default CardGrid;
