interface Base64Data {
  base64: string;
  img: {
    src: string;
  };
}

export const getBase64 = (src: string): Base64Data => {
  const splitWord = src.split("/");
  const dirSrc = splitWord[2];
  const imgSrc = splitWord[3];

  const base64JSON = require(`../scripts/output/${dirSrc}/base64.json`);
  return base64JSON[imgSrc];
};
