import { ClovaOutput } from "@/action/ocr-action";

interface LabelTextProps {
  label?: string | null;
  text?: string | null;
}

const LabelText = ({ label, text }: LabelTextProps) => {
  const extractName = (fullName: string) => {
    if (fullName) {
      const nameWithoutParentheses = fullName.replace(/\(.*?\)/g, "");
      return nameWithoutParentheses.trim();
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <p>{label}</p>
      <div className="w-full flex items-center bg-[#020817] border rounded-md p-2 h-12 min-h-12">
        {extractName(text!)}
      </div>
    </div>
  );
};

interface OCRResultProps {
  clovaData?: ClovaOutput | null;
}

const OCRResult = ({ clovaData }: OCRResultProps) => {
  const name = clovaData && clovaData.images[0].fields[1].inferText;
  const socialNumber = clovaData && clovaData.images[0].fields[2].inferText;

  return (
    <div className="w-full flex flex-col space-y-5">
      <h1 className="text-3xl mb-5">결과</h1>

      <LabelText label={"이름"} text={name} />
      <LabelText label={"주민등록번호"} text={socialNumber} />
    </div>
  );
};

export default OCRResult;
