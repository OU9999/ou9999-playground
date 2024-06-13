/**
 * 30분을 넘겼는지 체크
 * @param lastRequestTime 밀리초 단위의 시간
 * @return 30분을 넘기면 true, 아니면 false
 */
export const isOverThirtyMinutes = (lastRequestTime: string) => {
  const now = Date.now();
  const thirtyMinutes = 30 * 60 * 1000;

  if (now - parseInt(lastRequestTime) > thirtyMinutes) {
    return true;
  }

  return false;
};

/**
 * 밀리초 단위의 시간을 초 단위로 변환
 * @param elapsedTime 밀리초 단위의 시간
 * @return 초 단위의 시간 (소수점 이하 첫째 자리까지)
 */
export const convertMillisecondsToSeconds = (elapsedTime: number): string => {
  const seconds = (elapsedTime / 1000).toFixed(1);
  return `${seconds} s`;
};
