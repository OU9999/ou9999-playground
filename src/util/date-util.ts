export const isOverThirtyMinutes = (lastRequestTime: string) => {
  const now = Date.now();
  const thirtyMinutes = 30 * 60 * 1000;
  // const thirtyMinutes = 1000;

  if (now - parseInt(lastRequestTime) > thirtyMinutes) {
    return true;
  }

  return false;
};
