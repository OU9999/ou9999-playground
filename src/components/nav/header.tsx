import Link from "next/link";
import OwlIcon from "../svg/owl-icon";

const Header = () => {
  return (
    <header className="z-40 w-full h-14 flex justify-center fixed bg-blur-black border-b-1 border-slate-800 backdrop-blur-md">
      <div className="w-full max-w-336 px-5 h-full flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex space-x-1 cursor-pointer">
            <div className="w-8 h-8 md:w-10 md:h-10">
              <OwlIcon />
            </div>
            <p className="font-bold text-xl md:text-2xl relative top-[1px] md:top-[2px]">
              PLAYGROUND
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
