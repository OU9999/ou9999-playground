"use client";
import GridBox from "@/components/ui/grid-box";
import OCRForm from "./ocr-form";
import Image from "next/image";
import { useState } from "react";
import OCRResult from "./ocr-result";
import { ClovaOutput } from "@/action/ocr-action";

const OCRBox = () => {
  const [imgSrc, setImgSrc] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clovaData, setClovaData] = useState<ClovaOutput | null>(null);

  return (
    <GridBox className="p-10 space-y-10 flex flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center w-full space-x-10">
        <OCRForm
          setImgSrc={setImgSrc}
          setIsLoading={setIsLoading}
          setClovaData={setClovaData}
          isLoading={isLoading}
        />
        <div
          className={`relative w-72 h-44 md:w-96 md:h-60 min-w-72 min-h-44 md:min-w-96 md:min-h-60 rounded-lg overflow-hidden flex justify-center items-center border bg-[#020817]`}
        >
          {imgSrc ? <Image alt="ocr-image" src={imgSrc} fill /> : <p>이미지</p>}
        </div>
      </div>
      <OCRResult clovaData={clovaData} />
    </GridBox>
  );
};

export default OCRBox;
