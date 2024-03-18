import Link from "next/link";

const Header = () => {
  return (
    <header className="z-40 w-full h-14 md:h-20 flex justify-center fixed bg-red-500">
      <div className="w-full max-w-276 px-5 xl:px-0 h-full flex justify-between items-center">
        <p>this is header</p>
      </div>
    </header>
  );
};

export default Header;
