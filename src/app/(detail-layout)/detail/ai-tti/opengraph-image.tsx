import OpenGraphImageCustom from "@/components/common/opengraph-image-custom";

const AiTtiOpenGraphImage = async () => {
  const ogImage = await OpenGraphImageCustom("ai-tti");
  return ogImage;
};

export default AiTtiOpenGraphImage;
