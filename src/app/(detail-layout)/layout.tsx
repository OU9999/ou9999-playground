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
        <div className="w-full h-[400px] mt-14 bg-gradient-head flex flex-col justify-center items-center space-y-5">
          {headSection}
        </div>
        <div className="w-full max-w-336 flex h-full px-5 space-x-5">
          <div className="w-full max-w-[75%] border-r-1 border-slate-800 ">
            {children}
          </div>
          <div className="w-full max-w-[25%]">
            <p>{rightSection}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
