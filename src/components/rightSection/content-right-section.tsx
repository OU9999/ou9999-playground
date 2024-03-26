interface ContentRightSectionProps {
  inspired: string;
  dependencies: string[];
}

const ContentRightSection = ({
  inspired,
  dependencies,
}: ContentRightSectionProps) => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col">
        <p className="text-slate-400 text-sm">Inspired by</p>
        <p>{inspired}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-slate-400 text-sm">Dependencies</p>
        <ul className="list-disc pl-5 pt-1">
          {dependencies.map((d) => (
            <li key={inspired + d}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentRightSection;
