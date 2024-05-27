"use client";
import ReCAPTCHA from "react-google-recaptcha";

const sitekey = String(process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY);

interface ReCaptchaProps {
  onChange: () => void;
}

const ReCaptcha = ({ onChange }: ReCaptchaProps) => {
  return (
    <div className="h-[75px] min-h-[75px] max-h-[75px]">
      <ReCAPTCHA theme="dark" sitekey={sitekey} onChange={onChange} />
    </div>
  );
};

export default ReCaptcha;
