import { ReactNode } from "react";

interface DetailLayoutProps {
  children: ReactNode;
  headSection: ReactNode;
  rightSection: ReactNode;
}

const DetailLayout = ({
  children,
  headSection,
  rightSection,
}: DetailLayoutProps) => {
  return (
    <div className="w-dvw h-auto min-h-dvh relative">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-auto min-h-[400px] mt-14 bg-gradient-head flex flex-col justify-center items-center ">
          <div className="w-full h-full max-w-336 items-center content-center space-y-5 px-5">
            {headSection}
          </div>
        </div>
        <div className="w-full max-w-336 flex h-full px-5 space-x-5">
          <div className="w-full max-w-full md:max-w-[75%] md:border-r-1 border-slate-800 ">
            {children}
          </div>
          <div className="w-full max-w-[25%] hidden md:inline-block">
            <p>{rightSection}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
