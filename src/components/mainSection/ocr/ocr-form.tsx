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
  isLoading: boolean;
}

const OCRForm = ({
  setImgSrc,
  setIsLoading,
  setClovaData,
  isLoading,
}: OCRFormProps) => {
  const form = useForm<z.infer<FormZodType>>({
    resolver: zodResolver(FormSchema),
  });

  const submitFn = async (formData: FormCustomData) => {
    setIsLoading(true);
    const url = getUrlFromSelect(formData.select);
    const data = await callClovaOCR(url);

    if (typeof data !== "string") setClovaData(data);
    setIsLoading(false);
    console.log("client data", data); // 테스트 끝나면 지울것
  };

  const onSubmit = form.handleSubmit(submitFn);

  return (
    <>
      <Form {...form}>
        <form onSubmit={onSubmit} className="w-full relative space-y-8">
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
          <Button type="submit" disabled={isLoading}>
            실행
          </Button>
        </form>
      </Form>
    </>
  );
};

export default OCRForm;
