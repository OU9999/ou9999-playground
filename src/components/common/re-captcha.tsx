"use client";
import ReCAPTCHA from "react-google-recaptcha";

const sitekey = String(process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY);

interface ReCaptchaProps {
  onChange: () => void;
}

const ReCaptcha = ({ onChange }: ReCaptchaProps) => {
  return <ReCAPTCHA theme="dark" sitekey={sitekey} onChange={onChange} />;
};

export default ReCaptcha;
