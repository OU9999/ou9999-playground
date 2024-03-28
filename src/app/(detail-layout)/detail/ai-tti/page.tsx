import AiTextToImage from "@/components/mainSection/ai-text-to-image";

const API_TOKEN = process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN;

const AiTtiDetailPage = () => {
  return (
    <div className="w-full h-dvh">
      <AiTextToImage />
    </div>
  );
};

export default AiTtiDetailPage;
