import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ReCaptcha from "@/components/common/re-captcha";

interface FormCustomData {
  prompt: string;
  select: string;
}

interface ReplicateFormProps {
  submitFn: (formData: FormCustomData) => Promise<void>;
  disable: boolean;
  certification: boolean;
  certificationSuccess: () => void;
  error: boolean;
  errorMessage: string | null;
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

type FormZodType = typeof FormSchema;

const ReplicateForm = ({
  submitFn,
  disable,
  certification,
  certificationSuccess,
  error,
  errorMessage,
}: ReplicateFormProps) => {
  const form = useForm<z.infer<FormZodType>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = form.handleSubmit(submitFn);

  return (
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
                프롬프트는 쉼표(,)로 구분합니다.
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

        <div className="w-full flex flex-col space-x-0 xl:space-x-3 space-y-3 xl:space-y-0 xl:flex-row items-center">
          <Button disabled={disable} type="submit" className="w-full xl:w-auto">
            실행
          </Button>
          {error && (
            <p className="text-red-500 text-xs md:text-sm w-full text-center">
              {errorMessage}
            </p>
          )}
        </div>

        {!certification && <ReCaptcha onChange={certificationSuccess} />}
      </form>
    </Form>
  );
};

export default ReplicateForm;
