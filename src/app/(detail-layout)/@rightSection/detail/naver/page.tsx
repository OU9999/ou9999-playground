const NaverRightSection = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col">
        <p className="text-slate-400 text-sm">Inspired by</p>
        <p>Naver Webtoon</p>
      </div>
      <div className="flex flex-col">
        <p className="text-slate-400 text-sm">Dependencies</p>
        <ul className="list-disc pl-5 pt-1">
          <li>Node.js@20</li>
          <li>React@18</li>
          <li>Next.js@14</li>
          <li>TypeScript@5</li>
          <li>tailwindcss</li>
        </ul>
      </div>
    </div>
  );
};

export default NaverRightSection;
