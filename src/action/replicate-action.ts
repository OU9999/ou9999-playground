"use server";
import Replicate from "replicate";

type ReplicateOutPut = (
  prompt: string,
  model: `${string}/${string}` | `${string}/${string}:${string}`
) => Promise<string | string[]>;

export const getReplicateOutput: ReplicateOutPut = async (prompt, model) => {
  try {
    const replicate = new Replicate({
      auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
    });

    const input = {
      prompt: prompt,
      image_dimensions: "512x512",
      num_inference_steps: 12,
      num_outputs: 1,
      guideance_scale: 3.5,
      scheduler: "K_EULER",
      width: 512,
      height: 512,
    };

    const output = await replicate.run(model, {
      input,
    });

    return output as string[];
  } catch (err) {
    return String(err);
  }
};

export interface FormData {
  prompt: string;
  negative_prompt: string;
  width: number;
  height: number;
  num_inference_steps: number;
  guidance_scale: number;
  lora_scale: number;
  high_noise_frac: number;
  prompt_strength: number;
}

type ReplicateOutPutSDXL = (
  input: FormData,
  model: `${string}/${string}` | `${string}/${string}:${string}`
) => Promise<string | string[]>;

export const getReplicateOutputSDXL: ReplicateOutPutSDXL = async (
  input,
  model
) => {
  try {
    const replicate = new Replicate({
      auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
    });

    const output = await replicate.run(model, {
      input,
    });

    return output as string[];
  } catch (err) {
    return String(err);
  }
};
