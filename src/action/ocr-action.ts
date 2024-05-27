"use server";
import axios from "axios";

interface FieldVertice {
  x: number;
  y: number;
}

interface ClovaImageField {
  valueType: string;
  inferText: string;
  inferConfidence: number;
  boundingPoly: {
    vertices: FieldVertice[];
  };
}

interface ClovaImages {
  uid: string;
  name: string;
  inferResult: string;
  message: string;
  validationResult: object[];
  fields: ClovaImageField[];
}

interface ClovaOutput {
  version: string;
  requestId: string;
  timestamp: number;
  images: ClovaImages[];
}

type ClovaOCR = (url: string) => Promise<ClovaOutput | string>;

export const callClovaOCR: ClovaOCR = async (url) => {
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

    return response.data;
  } catch (err) {
    return String(err);
  }
};
