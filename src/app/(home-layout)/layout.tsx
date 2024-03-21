import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="w-dvw h-auto min-h-dvh relative">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-[400px] mt-14 bg-gradient-head flex justify-center items-center ">
          head section
        </div>
        <div className="w-full max-w-336 h-full px-5">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
