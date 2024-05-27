"use client";
import GridBox from "@/components/ui/grid-box";
import OCRForm from "./ocr-form";
import Image from "next/image";
import { useEffect, useState } from "react";
import OCRResult from "./ocr-result";
import { ClovaOutput } from "@/action/ocr-action";
import { isOverThirtyMinutes } from "@/util/date-util";

const OCRBox = () => {
  const [imgSrc, setImgSrc] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clovaData, setClovaData] = useState<ClovaOutput | null>(null);
  const [isCertification, setIsCertification] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const MAX_COUNT = 10;

  const setCertificationSuccess = (): void => {
    setIsCertification(true);
    sessionStorage.setItem("certification", String(true));
  };

  const setErrorAndMessage = (errorMessage: string) => {
    setIsError(true);
    setErrorMessage(errorMessage);
  };

  //storage
  useEffect(() => {
    if (count < MAX_COUNT) {
      return;
    }

    setErrorAndMessage("너무 많은 요청을 보냈습니다. 나중에 시도해 주세요.");
  }, [count]);

  useEffect(() => {
    setIsCertification(
      Boolean(sessionStorage.getItem("certification")) || false
    );
    setCount(Number(localStorage.getItem("count") || 0));

    const lastRequestTime = localStorage.getItem("date");
    if (lastRequestTime) {
      const overThirtyMinute = isOverThirtyMinutes(lastRequestTime);

      if (overThirtyMinute) {
        localStorage.removeItem("date");
        localStorage.removeItem("count");
        setIsError(false);
        setErrorMessage(null);
        setCount(0);
        return;
      }

      setErrorAndMessage("너무 많은 요청을 보냈습니다. 나중에 시도해 주세요.");
    }
  }, []);

  return (
    <GridBox className="p-10 space-y-20 flex flex-col">
      <div className="flex flex-col xl:flex-row justify-center items-center w-full space-y-5 xl:space-y-0 space-x-0 xl:space-x-10">
        <div className="w-96">
          <OCRForm
            setImgSrc={setImgSrc}
            setIsLoading={setIsLoading}
            setClovaData={setClovaData}
            setCount={setCount}
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
          className={`relative w-full h-44 xl:w-96 xl:h-60 min-w-72 max-w-96 min-h-44 xl:min-w-96 xl:min-h-60 rounded-lg overflow-hidden flex justify-center items-center border bg-[#020817]`}
        >
          {imgSrc ? <Image alt="ocr-image" src={imgSrc} fill /> : <p>이미지</p>}
        </div>
      </div>
      <OCRResult clovaData={clovaData} />
    </GridBox>
  );
};

export default OCRBox;
