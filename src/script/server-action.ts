"use server";
import Replicate from "replicate";

export const getReplicateOutput = async (
  prompt: string,
  model: `${string}/${string}` | `${string}/${string}:${string}`
) => {
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
    };

    const output = await replicate.run(model, {
      input,
    });

    return output as string[];
  } catch (err) {
    return String(err);
  }
};
