import { getBadgeString } from "@/util/badgeUtil";
import { Badge } from "../ui/badge";

interface ContentHeaderProps {
  title: string;
  text: string;
  badge?: "ui" | "engineering";
}

const ContentHeader = ({ title, text, badge }: ContentHeaderProps) => {
  const badgeString = badge && getBadgeString(badge);

  return (
    <>
      {badge && <Badge variant={badge}>{badgeString}</Badge>}
      <p className="text-4xl md:text-5xl font-bold">{title}</p>
      <p className="text-xl md:text-2xl text-slate-400">{text}</p>
    </>
  );
};

export default ContentHeader;
