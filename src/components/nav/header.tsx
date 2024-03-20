import Link from "next/link";
import SideBar from "./sidebar";

const Header = () => {
  return (
    <header className="z-40 w-full h-14 flex justify-center fixed bg-red-500">
      <div className="w-full max-w-336 px-5 h-full flex justify-between items-center">
        <p>this is header</p>
        <SideBar />
      </div>
    </header>
  );
};

export default Header;
