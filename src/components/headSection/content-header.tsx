import { Badge } from "../ui/badge";

interface ContentHeaderProps {
  title: string;
  text: string;
  badge?: string;
}

const ContentHeader = ({ title, text, badge }: ContentHeaderProps) => {
  return (
    <>
      {badge && (
        <Badge className="cursor-pointer font-bold bg-gradient-to-r text-slate-900 from-icon-from to-icon-to hover:text-slate-700">
          {badge}
        </Badge>
      )}
      <p className="text-5xl font-bold">{title}</p>
      <p className="text-2xl text-slate-400">{text}</p>
    </>
  );
};

export default ContentHeader;
