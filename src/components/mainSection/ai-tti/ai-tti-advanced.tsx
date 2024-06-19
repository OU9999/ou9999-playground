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
                <FormDescription>width</FormDescription>
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
                <FormDescription>height</FormDescription>
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
                  <FormLabelWithType title="num_outputs" type="number" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormDescription>num_outputs</FormDescription>
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
                  />
                </FormLabel>
                <FormControl>
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormDescription>num_inference_steps</FormDescription>
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
                  <FormLabelWithType title="guidance_scale" type="number" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormDescription>guidance_scale</FormDescription>
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
                  <FormLabelWithType title="lora_scale" type="number" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormDescription>lora_scale</FormDescription>
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
                <FormDescription>high_noise_frac</FormDescription>
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
                  <FormLabelWithType title="prompt_strength" type="number" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="number" {...field} />
                </FormControl>
                <FormDescription>prompt_strength</FormDescription>
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
