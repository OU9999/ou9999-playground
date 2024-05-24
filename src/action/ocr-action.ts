"use server";
import axios from "axios";

type ReplicateOutPut = (url: string) => Promise<object | string>;

export const callClovaOCR: ReplicateOutPut = async (url) => {
  const apiToken = process.env.NEXT_PUBLIC_OCR_TOKEN;
  const apiUrl = process.env.NEXT_PUBLIC_OCR_API;
  const requestBody = {
    images: [
      {
        format: "png",
        name: "medium",
        data: null,
        url: url,
      },
    ],
    lang: "ko",
    requestId: "string",
    resultType: "string",
    timestamp: new Date().getTime(),
    version: "V1",
  };

  try {
    const response = await axios.post(apiUrl!, requestBody, {
      headers: {
        "Content-Type": "application/json",
        "X-OCR-SECRET": apiToken,
      },
    });
    console.log(response.data);

    return response.data;
  } catch (err) {
    return String(err);
  }
};
