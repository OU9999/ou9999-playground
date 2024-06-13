export type Badge = "ui" | "engineering";

/**
 * Badge string을 보기좋게 대문자로 변환
 * @param badge "ui" | "engineering"
 * @return 대문자로 변환하여 return
 */
export const getBadgeString = (badge: Badge) => {
  let result;
  switch (badge) {
    case "ui":
      result = "UI/UX";
      break;
    case "engineering":
      result = "Engineering";
      break;
    default:
      result = "";
      break;
  }

  return result;
};
