interface ContentHeaderProps {
  title: string;
  text: string;
}

const ContentHeader = ({ title, text }: ContentHeaderProps) => {
  return (
    <>
      <p className="text-5xl font-bold">{title}</p>
      <p className="text-2xl text-slate-400">{text}</p>
    </>
  );
};

export default ContentHeader;
