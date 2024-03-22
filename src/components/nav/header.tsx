import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="z-40 w-full h-14 flex justify-center fixed bg-blur-black border-b-1 border-slate-800 backdrop-blur-md">
      <div className="w-full max-w-336 px-5 h-full flex justify-between items-center">
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
