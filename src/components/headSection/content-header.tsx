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
        <Badge className="cursor-pointer bg-gradient-to-r  hover:text-slate-400">
          {badge}
        </Badge>
      )}
      <p className="text-5xl font-bold">{title}</p>
      <p className="text-2xl text-slate-400">{text}</p>
    </>
  );
};

export default ContentHeader;
