"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AiTextToImage = () => {
  return (
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
  );
};

export default AiTextToImage;
