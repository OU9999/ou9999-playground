type Badge = "ui" | "engineering";

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
