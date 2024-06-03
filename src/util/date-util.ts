export const isOverThirtyMinutes = (lastRequestTime: string) => {
  const now = Date.now();
  const thirtyMinutes = 30 * 60 * 1000;
  // const thirtyMinutes = 1000;

  if (now - parseInt(lastRequestTime) > thirtyMinutes) {
    return true;
  }

  return false;
};

/**
 * 밀리초 단위의 시간을 초 단위로 변환합니다.
 * @param elapsedTime 밀리초 단위의 시간
 * @returns 초 단위의 시간 (소수점 이하 첫째 자리까지)
 */
export const convertMillisecondsToSeconds = (elapsedTime: number): string => {
  const seconds = (elapsedTime / 1000).toFixed(1);
  return `${seconds} s`;
};
