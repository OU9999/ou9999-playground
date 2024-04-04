import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center flex-col space-y-10">
      <p className="font-bold text-9xl">404</p>
      <Link href={"/"}>
        <Button>GO HOME</Button>
      </Link>
    </div>
  );
};

export default NotFound;
