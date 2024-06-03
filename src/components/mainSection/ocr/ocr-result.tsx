import { convertMillisecondsToSeconds } from "@/util/date-util";
import { ClovaOCRData } from "@/util/ocr-util";

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
  clovaData?: ClovaOCRData | null;
  elapsedTime?: number | null;
}

const OCRResult = ({ clovaData, elapsedTime }: OCRResultProps) => {
  return (
    <div className="w-full flex flex-col relative">
      {elapsedTime && (
        <p className="absolute right-0 top-0">
          경과 시간 : {convertMillisecondsToSeconds(elapsedTime)}
        </p>
      )}

      <h1 className="text-3xl mb-5">결과</h1>

      <div className="w-full h-auto flex flex-col space-y-3">
        {clovaData &&
          clovaData.fields.map((field) => (
            <LabelText
              key={"LABEL TEXT" + field.title}
              label={field.title}
              text={field.text}
            />
          ))}
      </div>
    </div>
  );
};

export default OCRResult;
