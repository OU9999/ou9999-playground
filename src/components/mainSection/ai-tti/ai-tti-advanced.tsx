"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GridBox from "@/components/ui/grid-box";
import ReplicateFormAdvanced from "./replicate-form-advanced";
import { useCertification } from "@/hooks/useCertification";
import { useState } from "react";
import {
  checkHasNSFWPrompt,
  getAiModelText,
  getKoreanErrorMessage,
} from "@/util/stability-ai-util";
import { FormData, getReplicateOutputSDXL } from "@/action/replicate-action";
import Image from "next/image";
import LoadingSpinner from "@/components/common/loading-spinner";

const AiTextToImageAdvancedBox = () => {
  const MAX_COUNT = 10;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string[] | null>(null);
  const {
    isCertification,
    setCertificationSuccess,
    setCount,
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
    setErrorAndMessage,
  } = useCertification({ maxCount: MAX_COUNT });

  const getReplicateData = async (formData: FormData) => {
    setIsError(false);
    setIsLoading(true);
    setImgSrc(null);
    setErrorMessage(null);

    const hasNSFWWord = checkHasNSFWPrompt(formData.prompt);
    if (hasNSFWWord) {
      setErrorAndMessage(
        "부적절한 프롬프트가 발견됐습니다. 다른 프롬프트를 넣어주세요."
      );
      setIsLoading(false);
      return;
    }
    const model = getAiModelText("sdxl");
    const output = await getReplicateOutputSDXL(formData, model!);

    if (typeof output === "object") {
      setImgSrc(output);
    } else {
      const koreanErrorMessage = getKoreanErrorMessage(output);
      setErrorAndMessage(koreanErrorMessage);
    }

    setIsLoading(false);

    const currentCount = Number(localStorage.getItem("count") || 0) + 1;
    localStorage.setItem("count", String(currentCount));
    setCount(currentCount);

    if (currentCount >= MAX_COUNT) {
      localStorage.setItem("date", String(Date.now()));
    }
  };

  return (
    <GridBox className="flex flex-col xl:flex-row space-y-10 xl:space-y-0 space-x-0 xl:space-x-5 h-auto justify-center items-center xl:items-start content-center p-10 ">
      <div className="flex w-72 md:w-96 space-y-2">
        <ReplicateFormAdvanced
          submitFn={getReplicateData}
          certification={isCertification}
          certificationSuccess={setCertificationSuccess}
          disable={
            isLoading ||
            !isCertification ||
            Number(localStorage.getItem("count"!)) >= MAX_COUNT
          }
          error={isError}
          errorMessage={errorMessage}
        />
      </div>

      <div
        className={`relative w-72 h-72 md:w-96 md:h-96 min-w-72 min-h-72 md:min-w-96 md:min-h-96 rounded-lg overflow-hidden flex justify-center items-center border bg-[#020817] ${
          isError && "border-red-500"
        } `}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <p className={`text-red-500`}>{errorMessage}</p>
        ) : (
          <Image
            alt="ai-image"
            src={imgSrc ? imgSrc[0] : "/imgs/ai/cat-wick.png"}
            fill
            placeholder="blur"
            blurDataURL={
              "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPce/h4PQAHVALI8GDtfQAAAABJRU5ErkJggg=="
            }
          />
        )}
      </div>
    </GridBox>
  );
};

const AiTextToImageAdvanced = () => {
  return (
    <Accordion className="my-10" type="single" collapsible>
      <AccordionItem value="item-1" className="">
        <AccordionTrigger>
          <h1 className="text-xl">sdxl custom form</h1>
        </AccordionTrigger>
        <AccordionContent>
          <AiTextToImageAdvancedBox />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AiTextToImageAdvanced;
