import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex justify-center border-t-1 border-slate-300 dark:border-slate-700">
      <div className="w-full max-w-336 p-5 flex justify-center md:justify-start items-center">
        <div className="flex text-xs md:text-sm text-slate-400">
          <p>Built by&nbsp;</p>
          <Link href="https://github.com/OU9999">
            <p className="underline cursor-pointer">OU9999</p>
          </Link>
          <p>.&nbsp;The source code is available on&nbsp;</p>
          <Link href="https://github.com/OU9999/ou9999-playground">
            <p className="underline cursor-pointer">GitHub</p>
          </Link>
          <p>.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
