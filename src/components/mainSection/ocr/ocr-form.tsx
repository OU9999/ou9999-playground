"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ClovaOutput, callClovaOCR } from "@/action/ocr-action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUrlFromSelect } from "@/util/ocr-util";
import { Dispatch, SetStateAction } from "react";
import ReCaptcha from "@/components/common/re-captcha";

const FormSchema = z.object({
  select: z.string({
    required_error: "템플릿을 선택해야 합니다.",
  }),
});

type FormZodType = typeof FormSchema;

interface FormCustomData {
  select: string;
}

interface OCRFormProps {
  setImgSrc: Dispatch<SetStateAction<string | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setClovaData: Dispatch<SetStateAction<null | ClovaOutput>>;
  setCount: Dispatch<SetStateAction<number>>;
  isCertification: boolean;
  isDisable: boolean;
  certificationSuccess: () => void;
  error: boolean;
  errorMessage: string | null;
}

const OCRForm = ({
  setImgSrc,
  setIsLoading,
  setClovaData,
  setCount,
  isCertification,
  isDisable,
  certificationSuccess,
  error,
  errorMessage,
}: OCRFormProps) => {
  const form = useForm<z.infer<FormZodType>>({
    resolver: zodResolver(FormSchema),
  });

  const submitFn = async (formData: FormCustomData) => {
    setIsLoading(true);
    const url = getUrlFromSelect(formData.select);
    const data = await callClovaOCR(url);

    if (typeof data !== "string") setClovaData(data);

    const currentCount = Number(localStorage.getItem("count") || 0) + 1;
    localStorage.setItem("count", String(currentCount));
    setCount(currentCount);

    if (currentCount >= 10) {
      localStorage.setItem("date", String(Date.now()));
    }

    setIsLoading(false);
  };

  const onSubmit = form.handleSubmit(submitFn);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="w-full relative space-y-5 md:space-y-8"
        >
          <FormField
            control={form.control}
            name="select"
            render={({ field }) => (
              <FormItem>
                <FormLabel>OCR 템플릿</FormLabel>
                <Select
                  {...field}
                  onValueChange={(value) => {
                    field.onChange(value);
                    const url = getUrlFromSelect(value);
                    setImgSrc(url);
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="OCR 템플릿을 골라주세요." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="id">신분증</SelectItem>
                    <SelectItem value="card" disabled>
                      신용 카드(준비중)
                    </SelectItem>
                    <SelectItem value="driver" disabled>
                      운전면허증(준비중)
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col space-x-0 xl:space-x-3 space-y-3 xl:space-y-0 xl:flex-row items-center">
            <Button
              disabled={isDisable}
              type="submit"
              className="w-full xl:w-auto"
            >
              실행
            </Button>
            {error && (
              <p className="text-red-500 text-xs md:text-sm w-full text-center">
                {errorMessage}
              </p>
            )}
          </div>
          {isCertification ? (
            <div className="h-[75px] relative hidden xl:flex" />
          ) : (
            <ReCaptcha onChange={certificationSuccess} />
          )}
        </form>
      </Form>
    </>
  );
};

export default OCRForm;
