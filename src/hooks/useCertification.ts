"use client";
import { useState, useEffect } from "react";
import { isOverThirtyMinutes } from "@/util/date-util";

interface useCertificationProps {
  maxCount: number;
}

export const useCertification = ({ maxCount }: useCertificationProps) => {
  const [isCertification, setIsCertification] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const setCertificationSuccess = (): void => {
    setIsCertification(true);
    sessionStorage.setItem("certification", String(true));
  };

  const setErrorAndMessage = (errorMessage: string) => {
    setIsError(true);
    setErrorMessage(errorMessage);
  };

  useEffect(() => {
    if (count >= maxCount) {
      setErrorAndMessage("너무 많은 요청을 보냈습니다. 나중에 시도해 주세요.");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    const storedCertification = sessionStorage.getItem("certification");
    setIsCertification(Boolean(storedCertification) || false);

    const storedCount = localStorage.getItem("count");
    setCount(Number(storedCount) || 0);

    const lastRequestTime = localStorage.getItem("date");
    if (lastRequestTime) {
      const overThirtyMinute = isOverThirtyMinutes(lastRequestTime);
      if (overThirtyMinute) {
        localStorage.removeItem("date");
        localStorage.removeItem("count");
        setIsError(false);
        setErrorMessage(null);
        setCount(0);
      } else {
        setErrorAndMessage(
          "너무 많은 요청을 보냈습니다. 나중에 시도해 주세요."
        );
      }
    }
  }, []);

  return {
    isCertification,
    setCertificationSuccess,
    count,
    setCount,
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
    setErrorAndMessage,
  };
};
