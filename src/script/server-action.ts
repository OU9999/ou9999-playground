"use server";
import Replicate from "replicate";

export const getReplicateOutput = async (formData: FormData) => {
  const prompt = formData.get("prompt");

  const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
  });

  console.log("Running the model...");

  const output = await replicate.run(
    "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
    {
      input: {
        prompt: prompt,
        image_dimensions: "512x512",
        num_inference_steps: 12,
        num_outputs: 1,
        guideance_scale: 3.5,
        scheduler: "K_EULER",
      },
    }
  );

  console.log(output);
};
