import CryptoJS from "crypto-js";

export const encrypt = (data: string) => {
  const key = process.env.NEXT_PUBLIC_CRYPTO_JS_KEY;
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key!);
  return encrypted.toString();
};

export const decrypt = (text: string) => {
  try {
    const key = process.env.NEXT_PUBLIC_CRYPTO_JS_KEY;
    const bytes = CryptoJS.AES.decrypt(text, key!);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedData;
  } catch (err) {
    console.log(err);
    return;
  }
};
