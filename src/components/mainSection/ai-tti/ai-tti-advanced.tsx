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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

const AiTextToImageAdvanced = () => {
  const form = useForm();
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
                    placeholder="An astronaut riding a rainbow unicorn"
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
                  <Input placeholder="number" {...field} />
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
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormDescription>Height of output image</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="num_outputs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabelWithType
                    title="num_outputs"
                    type="number"
                    desc="(minimum: 1, maximum: 4)"
                  />
                </FormLabel>
                <FormControl>
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormDescription>Number of images to output.</FormDescription>
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
                  <Input placeholder="number" {...field} />
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
                  <Input placeholder="number" {...field} />
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
                  <Input placeholder="number" {...field} />
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
                  <FormLabelWithType title="high_noise_frac" type="number" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormDescription>
                  For expert_ensemble_refiner, the fraction of noise to use
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
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormDescription>
                  Prompt strength when using img2img / inpaint. 1.0 corresponds
                  to full destruction of information in image
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
