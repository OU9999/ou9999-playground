import { getBadgeString } from "@/util/badge-util";
import { Badge } from "./badge";
import Image from "next/image";
import Link from "next/link";

interface MainCardProps {
  title: string;
  badge: "ui" | "engineering";
  link: string;
  image?: string;
}

const MainCard = ({ title, badge, link, image }: MainCardProps) => {
  const badgeString = getBadgeString(badge);

  return (
    <Link href={`/detail/${link}`}>
      <div className="h-72 min-h-72 rounded-md flex flex-col overflow-hidden border cursor-pointer transition-colors md:hover:border-slate-50">
        <div className="h-5/6 relative flex justify-center p-10">
          <div className="w-56 min-w-56 h-full relative">
            {image && (
              <Image alt="card-image" fill src={`/imgs/card/${image}.webp`} />
            )}
          </div>
        </div>
        <div className="h-20 px-3 py-2 bg-slate-800 space-y-1">
          <Badge variant={badge}>{badgeString}</Badge>
          <p className="pl-1">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default MainCard;
