"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormLabelWithType from "@/components/ui/form-label-with-type";
import GridBox from "@/components/ui/grid-box";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  prompt: z
    .string({
      required_error: "프롬프트는 빈칸일 수 없습니다.",
    })
    .min(1, { message: "프롬프트는 빈칸일 수 없습니다." })
    .regex(/^[a-zA-Z0-9\s,]*$/, {
      message: "영단어, 숫자, 공백, 쉼표만 사용 가능합니다.",
    }),
  negative_prompt: z.string().regex(/^[a-zA-Z0-9\s,]*$/, {
    message: "영단어, 숫자, 공백, 쉼표만 사용 가능합니다.",
  }),
  width: z
    .number()
    .int({ message: "정수여야 합니다." })
    .min(320, { message: "min width 320" })
    .max(1024, { message: "max width 1024" }),
  height: z
    .number()
    .int({ message: "정수여야 합니다." })
    .min(320, { message: "min height 320" })
    .max(1024, { message: "max height 1024" }),
  num_inference_steps: z
    .number()
    .int({ message: "정수여야 합니다." })
    .min(1, { message: "min num_inference_steps 1" })
    .max(500, { message: "max num_inference_steps 500" }),
  guidance_scale: z
    .number()
    .min(1, { message: "min guidance_scale 1" })
    .max(50, { message: "max guidance_scale 50" })
    .refine((value) => Number.isInteger(value * 10), {
      message: "소숫점 한 자릿수까지만 허용됩니다.",
    }),
  lora_scale: z
    .number()
    .min(0, { message: "min lora_scale 0" })
    .max(1, { message: "max lora_scale 1" })
    .refine((value) => Number.isInteger(value * 10), {
      message: "소숫점 한 자릿수까지만 허용됩니다.",
    }),
  high_noise_frac: z
    .number()
    .min(0, { message: "min high_noise_frac 0" })
    .max(1, { message: "max high_noise_frac 1" })
    .refine((value) => Number.isInteger(value * 10), {
      message: "소숫점 한 자릿수까지만 허용됩니다.",
    }),
  prompt_strength: z
    .number()
    .min(0, { message: "min prompt_strength 0" })
    .max(1, { message: "max prompt_strength 1" })
    .refine((value) => Number.isInteger(value * 10), {
      message: "소숫점 한 자릿수까지만 허용됩니다.",
    }),
});

type FormZodType = typeof FormSchema;

const AiTextToImageAdvanced = () => {
  const form = useForm<z.infer<FormZodType>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <GridBox className="my-10 p-10 min-h-96 flex flex-col">
      <Form {...form}>
        <form className="w-full relative space-y-8">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType title="prompt" type="string" />
                </FormLabel>
                <FormControl>
                  <Input
                    defaultValue={
                      "cyberpunk cat, octane render, hyper realistic"
                    }
                    {...field}
                  />
                </FormControl>
                <FormDescription>Input prompt</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="negative_prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType title="negative_prompt" type="string" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Input Negative Prompt</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType title="width" type="number" />
                </FormLabel>
                <FormControl>
                  <Input defaultValue={512} {...field} />
                </FormControl>
                <FormDescription>Width of output image</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType title="height" type="number" />
                </FormLabel>
                <FormControl>
                  <Input defaultValue={512} {...field} />
                </FormControl>
                <FormDescription>Height of output image</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="num_inference_steps"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType
                    title="num_inference_steps"
                    type="number"
                    desc="(minimum: 1, maximum: 500)"
                  />
                </FormLabel>
                <FormControl>
                  <Input defaultValue={50} {...field} />
                </FormControl>
                <FormDescription>
                  Number of denoising steps (Default: 50)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guidance_scale"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType
                    title="guidance_scale"
                    type="number"
                    desc="(minimum: 1, maximum: 50)"
                  />
                </FormLabel>
                <FormControl>
                  <Input defaultValue={7.5} {...field} />
                </FormControl>
                <FormDescription>
                  Scale for classifier-free guidance (Default: 7.5)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lora_scale"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType
                    title="lora_scale"
                    type="number"
                    desc="(minimum: 0, maximum: 1)"
                  />
                </FormLabel>
                <FormControl>
                  <Input defaultValue={0.6} {...field} />
                </FormControl>
                <FormDescription>
                  LoRA additive scale. Only applicable on trained models.
                  (Default: 0.6)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="high_noise_frac"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType
                    title="high_noise_frac"
                    type="number"
                    desc="(minimum: 0, maximum: 1)"
                  />
                </FormLabel>
                <FormControl>
                  <Input defaultValue={0.8} {...field} />
                </FormControl>
                <FormDescription>
                  For expert_ensemble_refiner, the fraction of noise to use
                  (Default: 0.8)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prompt_strength"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType
                    title="prompt_strength"
                    type="number"
                    desc="(minimum: 0, maximum: 1)"
                  />
                </FormLabel>
                <FormControl>
                  <Input defaultValue={0.8} {...field} />
                </FormControl>
                <FormDescription>
                  Prompt strength when using img2img / inpaint. 1.0 corresponds
                  to full destruction of information in image (Default: 0.8)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </GridBox>
  );
};

export default AiTextToImageAdvanced;
