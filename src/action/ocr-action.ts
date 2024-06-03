"use server";
import {
  ClovaOCRData,
  extractDataFromSelect,
  getUrlFromSelect,
} from "@/util/ocr-util";
import axios from "axios";

interface FieldVertice {
  x: number;
  y: number;
}

export interface ClovaImageField {
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

export interface ClovaOutput {
  version: string;
  requestId: string;
  timestamp: number;
  images: ClovaImages[];
}

interface ClovaOcrResultData {
  result: ClovaOCRData | null;
  elapsedTime: number;
}

type ClovaOCR = (select: string) => Promise<ClovaOcrResultData | string>;

export const callClovaOCR: ClovaOCR = async (select) => {
  const startTime = performance.now();
  const url = getUrlFromSelect(select);
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

    const clovaOutput: ClovaOutput = response.data;
    const data = extractDataFromSelect(select, clovaOutput);
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;

    return { result: data, elapsedTime };
  } catch (err) {
    return String(err);
  }
};
