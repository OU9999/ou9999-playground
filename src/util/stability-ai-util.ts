import { nsfwList } from "@/constant/nsfw-list";

export type SelectFormData = "sdxl" | "stable-diffusion";

type ModelText = `${string}/${string}` | `${string}/${string}:${string}` | null;

export const getAiModelText = (select: SelectFormData): ModelText => {
  let result: ModelText;

  switch (select) {
    case "sdxl":
      result =
        "stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc";
      break;
    case "stable-diffusion":
      result =
        "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4";
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
