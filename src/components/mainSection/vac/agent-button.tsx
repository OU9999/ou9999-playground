import Image from "next/image";

interface AgentButtonProps {
  img: string;
  clickFn: () => void;
  selected: boolean;
}

const AgentButton = ({ img, clickFn, selected }: AgentButtonProps) => {
  return (
    <div
      onClick={clickFn}
      className={`w-20 md:w-28 h-20 md:h-28 min-w-20 md:min-w-28 min-h-20 md:min-h-28 border-4  border-opacity-60 relative bg-slate-100 bg-opacity-10 cursor-pointer ${
        selected ? "border-slate-100" : "border-slate-700"
      }`}
    >
      <Image alt="agent-icon" src={`/imgs/valorant-icon/${img}.png`} fill />
    </div>
  );
};

export default AgentButton;
