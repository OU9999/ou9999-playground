/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About test";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const OpenGraphImageCustom = async (imgSrc: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const fullSrc = `${baseUrl}/imgs/thumbnail/${imgSrc}.png`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "rgb(56,55,57)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt=""
          src={fullSrc}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
};

export default OpenGraphImageCustom;
