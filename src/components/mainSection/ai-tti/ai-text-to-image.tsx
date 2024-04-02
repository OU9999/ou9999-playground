"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { getReplicateOutput } from "@/script/server-action";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectFormData, getAiModelText } from "@/util/stability-ai-util";
import Image from "next/image";
import ReCaptcha from "../../common/re-captcha";
import LoadingSpinner from "../../common/loading-spinner";
import GridBox from "@/components/ui/grid-box";

interface FormCustomData {
  prompt: string;
  select: string;
}

const FormSchema = z.object({
  prompt: z
    .string({
      required_error: "프롬프트는 빈칸일 수 없습니다.",
    })
    .min(1, { message: "프롬프트는 빈칸일 수 없습니다." })
    .regex(/^[a-zA-Z\s,]*$/, {
      message: "영단어, 공백, 쉼표만 사용 가능합니다.",
    }),
  select: z.string({
    required_error: "ai 모델을 선택해야 합니다.",
  }),
});

const AiTextToImage = () => {
  //state
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCertification, setIsCertification] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [imgSrc, setImgSrc] = useState<string[] | null>(null);

  //form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const getReplicateData = async (formData: FormCustomData) => {
    setIsError(false);
    setIsLoading(true);
    setImgSrc(null);
    setErrorMessage(null);

    const promptValue = formData.prompt;
    const model = getAiModelText(formData.select as SelectFormData);

    const data = await getReplicateOutput(promptValue, model!);

    if (typeof data === "object") {
      setImgSrc(data);
    } else {
      setIsError(true);
      setErrorMessage(data);
    }

    setIsLoading(false);
  };

  const onSubmit = form.handleSubmit(getReplicateData);

  const test = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <GridBox className="flex flex-col xl:flex-row space-y-10 xl:space-y-0 space-x-0 xl:space-x-5 h-auto justify-center items-center content-center p-10 ">
      <div className="flex w-72 md:w-96 space-y-2">
        <Form {...form}>
          <form onSubmit={onSubmit} className="w-full relative space-y-8">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>프롬프트</FormLabel>
                  <FormControl>
                    <Input placeholder="robot, cat, rainbow" {...field} />
                  </FormControl>
                  <FormDescription>
                    단어는 쉼표(,)로 구분합니다.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="select"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>AI 모델</FormLabel>
                  <Select {...field} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="AI 모델을 선택해주세요." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="stable-diffusion">
                        stable-diffusion (realistic style)
                      </SelectItem>
                      <SelectItem value="sdxl">sdxl (art style)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    모델별로 이미지 스타일이 다릅니다.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading || !isCertification} type="submit">
              실행
            </Button>

            {!isCertification && (
              <ReCaptcha onChange={() => setIsCertification(true)} />
            )}
          </form>
        </Form>
      </div>

      <div className="relative w-72 h-72 md:w-96 md:h-96 min-w-72 min-h-72 md:min-w-96 md:min-h-96 rounded-lg overflow-hidden flex justify-center items-center border bg-[#020817]">
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
        ) : isError ? (
          <p className="text-red-500 text-xs md:text-sm w-full text-center">
            {errorMessage}
          </p>
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          <p>이미지</p>
        )}
      </div>
    </GridBox>
  );
};

export default AiTextToImage;
