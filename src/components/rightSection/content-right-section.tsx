interface ContentRightSectionProps {
  inspired: string;
  dependencies: string[];
}

const Dependency = (dependency: string) => {
  const specialCharIndex =
    dependency.indexOf("@") !== -1
      ? dependency.indexOf("@")
      : dependency.indexOf(":");
  if (specialCharIndex !== -1) {
    const firstPart = dependency.substring(0, specialCharIndex);
    const styledPart = dependency.substring(specialCharIndex);

    return (
      <span>
        {firstPart}
        <span className="text-slate-400">{styledPart}</span>
      </span>
    );
  }

  return <span>dependency</span>;
};

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
            <li key={inspired + d}>{Dependency(d)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentRightSection;
