import AiTextToImage from "@/components/mainSection/ai-text-to-image";
import { getReplicateOutput } from "@/script/server-action";

const AiTtiDetailPage = async () => {
  return (
    <div className="w-full h-dvh">
      <form action={getReplicateOutput}>
        <input name="prompt"></input>
        <button type="submit">버튼</button>
      </form>

      <AiTextToImage />
    </div>
  );
};

export default AiTtiDetailPage;
