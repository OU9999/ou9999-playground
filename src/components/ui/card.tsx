import { getBadgeString } from "@/util/badgeUtil";
import { Badge } from "./badge";

interface CardProps {
  title: string;
  badge: "ui" | "engineering";
}

const Card = ({ title, badge }: CardProps) => {
  const badgeString = getBadgeString(badge);

  return (
    <div className="min-h-72 md:min-h-72 rounded-md flex flex-col overflow-hidden border">
      <div className="h-5/6 relative"></div>
      <div className="h-20 px-3 py-2 bg-slate-800 space-y-1">
        <Badge variant={badge}>{badgeString}</Badge>
        <p className="pl-1">{title}</p>
      </div>
    </div>
  );
};

export default Card;
