import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

const iconPath = join(process.cwd(), "public/icon.png");
let iconBase64Promise: Promise<string> | null = null;

async function getIconBase64(): Promise<string> {
  if (!iconBase64Promise) {
    iconBase64Promise = readFile(iconPath)
      .then(
        (imageData) =>
          `data:image/png;base64,${imageData.toString("base64")}`
      )
      .catch((err) => {
        iconBase64Promise = null;
        throw err;
      });
  }
  return iconBase64Promise;
}

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const base64 = await getIconBase64();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        borderRadius: "22%",
        overflow: "hidden",
      }}
    >
      <img
        alt="College Connect"
        src={base64}
        width="32"
        height="32"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    { ...size }
  );
}
