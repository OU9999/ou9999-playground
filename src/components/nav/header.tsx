import Link from "next/link";
import { Button } from "../ui/button";
import OwlIcon from "../svg/owl-icon";

const Header = () => {
  return (
    <header className="z-40 w-full h-14 flex justify-center fixed bg-blur-black border-b-1 border-slate-800 backdrop-blur-md">
      <div className="w-full max-w-336 px-5 h-full flex justify-between items-center">
        <div className="flex space-x-1">
          <div className="w-10 h-10">
            <OwlIcon />
          </div>
          <p className="font-bold text-2xl relative top-[2px]">PLAYGROUND</p>
        </div>
        <div className="flex space-x-2">
          <Link href={"/"}>
            <Button>Home</Button>
          </Link>
          <Link href={"/detail/naver"}>
            <Button>Naver</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
