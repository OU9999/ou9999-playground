import { nsfwList } from "@/constant/nsfw-list";

export type SelectFormData = "sdxl" | "stable-diffusion";

type ModelText = `${string}/${string}` | `${string}/${string}:${string}` | null;

export const getAiModelText = (select: SelectFormData): ModelText => {
  let result: ModelText;

  switch (select) {
    case "sdxl":
      result =
        "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b";
      break;
    case "stable-diffusion":
      result =
        "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
      break;

    default:
      result = null;
      break;
  }

  return result;
};

export const checkHasNSFWPrompt = (prompt: string) => {
  const splitPrompt = prompt.split(",");
  for (let i = 0; i < splitPrompt.length; i++) {
    if (nsfwList.includes(splitPrompt[i])) return true;
  }

  return false;
};

export const getKoreanErrorMessage = (error: string) => {
  const nsfw =
    "Error: Prediction failed: NSFW content detected. Try running it again, or try a different prompt.";

  let result;

  switch (error) {
    case nsfw:
      result = "부적절한 프롬프트가 발견됐습니다. 다른 프롬프트를 넣어주세요.";
      break;

    default:
      result = error;
      break;
  }

  return result;
};
