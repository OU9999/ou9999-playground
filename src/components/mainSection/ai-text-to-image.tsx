"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { getReplicateOutput } from "@/script/server-action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectFormData, getAiModelText } from "@/util/stability-ai-util";
import Image from "next/image";

interface FormCustomData {
  prompt: string;
  select: string;
}

const FormSchema = z.object({
  prompt: z
    .string({
      required_error: "프롬프트는 빈칸일 수 없습니다.",
    })
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
  const [imgSrc, setImgSrc] = useState<any>(null);

  //form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const getReplicateData = async (formData: FormCustomData) => {
    setIsError(false);
    setIsLoading(true);
    setImgSrc(null);

    const promptValue = formData.prompt;
    const model = getAiModelText(formData.select as SelectFormData);

    const data = await getReplicateOutput(promptValue, model!);

    if (typeof data === "object") {
      setImgSrc(data);
    } else {
      setIsError(true);
    }

    console.log("data is >>", data);
    console.log("data type is >>", typeof data);
    setIsLoading(false);
  };

  const onSubmit = form.handleSubmit(getReplicateData);

  return (
    <>
      {isLoading && <p>LOADING....</p>}
      {isError && <p>Fucking error</p>}
      {imgSrc && <p>{imgSrc[0]}</p>}

      <div className="flex flex-col xl:flex-row mx-0 md:mx-10 space-y-10 xl:space-y-0 space-x-0 xl:space-x-5  h-auto justify-center items-center content-center p-10 border rounded-md bg-[length:2rem_2rem]  md:bg-[length:4rem_4rem] bg-grid-background">
        <div className="flex w-72 md:w-96 space-y-2">
          <Form {...form}>
            <form onSubmit={onSubmit} className="w-full space-y-8">
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
                    <FormLabel>ai 모델</FormLabel>
                    <Select {...field} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
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
                      You can manage email addresses in your
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading} type="submit">
                submit
              </Button>
            </form>
          </Form>
        </div>

        <div className="relative w-72 h-72 md:w-96 md:h-96 min-w-72 min-h-72 md:min-w-96 md:min-h-96 rounded-lg overflow-hidden flex justify-center items-center border bg-[#020817]">
          {imgSrc !== null ? (
            <Image alt="ai-image" src={imgSrc[0]} fill />
          ) : (
            <p>image</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AiTextToImage;
