"use client";
import GridBox from "@/components/ui/grid-box";
import OCRForm from "./ocr-form";
import Image from "next/image";
import { useState } from "react";
import OCRResult from "./ocr-result";
import { callClovaOCR } from "@/action/ocr-action";
import { useCertification } from "@/hooks/useCertification";
import { ClovaOCRData } from "@/util/ocr-util";

export interface FormCustomData {
  select: string;
}

const OCRBox = () => {
  const MAX_COUNT = 10;
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clovaData, setClovaData] = useState<ClovaOCRData | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);
  const {
    isCertification,
    setCertificationSuccess,
    setCount,
    isError,
    errorMessage,
  } = useCertification({ maxCount: MAX_COUNT });

  const submitFn = async (formData: FormCustomData) => {
    setIsLoading(true);

    const data = await callClovaOCR(formData.select);
    if (typeof data !== "string") {
      setClovaData(data.result);
      setElapsedTime(data.elapsedTime);
    }

    const currentCount = Number(localStorage.getItem("count") || 0) + 1;
    localStorage.setItem("count", String(currentCount));
    setCount(currentCount);

    if (currentCount >= MAX_COUNT) {
      localStorage.setItem("date", String(Date.now()));
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-10">
      <GridBox className="p-5 md:p-10 flex flex-col">
        <div className="flex flex-col xl:flex-row justify-center items-center w-full space-y-5 xl:space-y-0 space-x-0 xl:space-x-10">
          <div className="w-full max-w-96">
            <OCRForm
              setImgSrc={setImgSrc}
              submitFn={submitFn}
              isCertification={isCertification}
              isDisable={
                isLoading ||
                !isCertification ||
                Number(localStorage.getItem("count"!)) >= MAX_COUNT
              }
              certificationSuccess={setCertificationSuccess}
              error={isError}
              errorMessage={errorMessage}
            />
          </div>
          <div
            className={`relative w-full h-44 xl:w-96 xl:h-60 max-w-96 min-h-44 xl:min-w-96 xl:min-h-60 rounded-lg overflow-hidden flex justify-center items-center border bg-[#020817]`}
          >
            {imgSrc ? (
              <Image alt="ocr-image" src={imgSrc} fill />
            ) : (
              <p>이미지</p>
            )}
          </div>
        </div>
      </GridBox>

      <GridBox className="p-5 md:p-10">
        <OCRResult clovaData={clovaData} elapsedTime={elapsedTime} />
      </GridBox>
    </div>
  );
};

export default OCRBox;
