import Link from "next/link";
import SideBar from "./sidebar";

const Header = () => {
  return (
    <header className="z-40 w-full h-14 flex justify-center fixed bg-blur-black border-b-1 border-slate-800 backdrop-blur-md">
      <div className="w-full max-w-336 px-5 h-full flex justify-between items-center">
        <SideBar />
        <p>this is header</p>
      </div>
    </header>
  );
};

export default Header;
