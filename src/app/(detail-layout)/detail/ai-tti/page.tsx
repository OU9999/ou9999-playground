import AiTextToImage from "@/components/mainSection/ai-tti/ai-text-to-image";
import { getMetaDataFromSectionData } from "@/util/meta-data-util";
import { getSectionDataByLink } from "@/util/section-data-util";
import Link from "next/link";

export const generateMetadata = () => {
  const sectionData = getSectionDataByLink("ai-tti");
  const { title, description, thumbnail } = getMetaDataFromSectionData(
    sectionData!
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: {
        url: thumbnail,
      },
    },
  };
};

const AiTtiDetailPage = () => {
  return (
    <div className="w-full h-auto min-h-dvh">
      <AiTextToImage />
      <p className="mt-10 mb-5 text-2xl">구현과정</p>

      <Link href={"https://ou9999-dev.com/p/server-action-with-replicate"}>
        <p className="underline cursor-pointer hover:text-slate-300">
          NEXT.JS 서버 액션으로 AI TEXT-TO-IMAGE 구현하기
        </p>
      </Link>
    </div>
  );
};

export default AiTtiDetailPage;
