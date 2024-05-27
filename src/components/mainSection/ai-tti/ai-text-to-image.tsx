"use client";
import { useState } from "react";
import { getReplicateOutput } from "@/action/replicate-action";
import {
  SelectFormData,
  checkHasNSFWPrompt,
  getAiModelText,
  getKoreanErrorMessage,
} from "@/util/stability-ai-util";
import Image from "next/image";
import LoadingSpinner from "../../common/loading-spinner";
import GridBox from "@/components/ui/grid-box";
import ReplicateForm from "./replicate-form";
import { useCertification } from "@/hooks/useCertification";

interface FormCustomData {
  prompt: string;
  select: string;
}

const AiTextToImage = () => {
  //state
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
  } = useCertification();
  const MAX_COUNT = 10;

  const getReplicateData = async (formData: FormCustomData) => {
    setIsError(false);
    setIsLoading(true);
    setImgSrc(null);
    setErrorMessage(null);

    const promptValue = formData.prompt;
    const hasNSFWWord = checkHasNSFWPrompt(promptValue);
    if (hasNSFWWord) {
      setErrorAndMessage(
        "부적절한 프롬프트가 발견됐습니다. 다른 프롬프트를 넣어주세요."
      );
      setIsLoading(false);
      return;
    }

    const model = getAiModelText(formData.select as SelectFormData);
    const output = await getReplicateOutput(promptValue, model!);

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
    <GridBox className="flex flex-col xl:flex-row space-y-10 xl:space-y-0 space-x-0 xl:space-x-5 h-auto justify-center items-center content-center p-10 ">
      <div className="flex w-72 md:w-96 space-y-2">
        <ReplicateForm
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
        {imgSrc !== null ? (
          <Image
            alt="ai-image"
            src={imgSrc[0]}
            fill
            placeholder="blur"
            blurDataURL={
              "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPce/h4PQAHVALI8GDtfQAAAABJRU5ErkJggg=="
            }
          />
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          <p className={`${isError && "text-red-500"}`}>이미지</p>
        )}
      </div>
    </GridBox>
  );
};

export default AiTextToImage;
