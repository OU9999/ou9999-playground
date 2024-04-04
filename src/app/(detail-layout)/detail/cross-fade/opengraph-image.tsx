import OpenGraphImageCustom from "@/components/common/opengraph-image-custom";

const AiTtiOpenGraphImage = async () => {
  const ogImage = await OpenGraphImageCustom("cross-fade");
  return ogImage;
};

export default AiTtiOpenGraphImage;
