import { getBase64 } from "@/util/base64-util";
import Image, { ImageProps } from "next/image";

const ImageWithPlaceholder: React.FC<ImageProps> = (props) => {
  const base64Data = getBase64(props.src as string);

  return (
    <Image
      {...props}
      alt={base64Data.base64}
      placeholder="blur"
      blurDataURL={base64Data.base64}
    />
  );
};

export default ImageWithPlaceholder;
