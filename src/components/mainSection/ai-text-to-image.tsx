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

interface FormCustomData {
  prompt: string;
  select: string;
}
const FormSchema = z.object({
  prompt: z
    .string({
      required_error: "plz write prompt",
    })
    .regex(/^[a-zA-Z\s]*$/, {
      message: "plz use english",
    }),
  select: z.string({
    required_error: "plz select",
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
    const promptValue = formData.prompt;
    const selectValue = formData.select;
    const data = await getReplicateOutput(promptValue, selectValue);

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
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="robot, cat" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
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
                <FormLabel>Email</FormLabel>
                <Select {...field} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">submit</Button>
        </form>
      </Form>
      {isLoading && <p>LOADING....</p>}
      {isError && <p>Fucking error</p>}
      {imgSrc && <p>{imgSrc[0]}</p>}

      <div className="flex flex-col xl:flex-row mx-0 md:mx-10 space-y-10 xl:space-y-0 space-x-0 xl:space-x-5  h-auto justify-center items-center content-center p-10 border rounded-md bg-[length:2rem_2rem]  md:bg-[length:4rem_4rem] bg-grid-background">
        <div className="flex flex-col w-72 md:w-96 space-y-2">
          <Label htmlFor="text-input">프롬프트</Label>
          <div className="flex w-full space-x-3">
            <Input
              id="text-input"
              type="text"
              placeholder="robot, cat, space ...."
            />
            <Button>실행</Button>
          </div>
        </div>

        <div className="relative w-72 h-72 md:w-96 md:h-96 min-w-72 min-h-72 md:min-w-96 md:min-h-96 rounded-lg flex justify-center items-center border bg-black">
          이미지
        </div>
      </div>
    </>
  );
};

export default AiTextToImage;
