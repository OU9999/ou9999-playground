import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="w-dvw h-auto min-h-dvh relative">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-276 h-full mt-14 md:mt-20 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
