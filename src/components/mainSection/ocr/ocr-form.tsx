"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { callClovaOCR } from "@/action/ocr-action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  select: z.string({
    required_error: "템플릿을 선택해야 합니다.",
  }),
});

type FormZodType = typeof FormSchema;

const OCRForm = () => {
  const form = useForm<z.infer<FormZodType>>({
    resolver: zodResolver(FormSchema),
  });

  const submitFn = async () => {
    const data = await callClovaOCR("url");
    console.log("client data", data);
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
                <Select {...field} onValueChange={field.onChange}>
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
          <Button type="submit">실행</Button>
        </form>
      </Form>
    </>
  );
};

export default OCRForm;
