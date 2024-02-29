import Image from "next/image";
import React, { FC } from "react";

interface ImageResponsiveProps {
  src: string;
}

export const ImageResponsive: FC<ImageResponsiveProps> = ({ src }) => {
  return (
    <div style={{ width: "100%", position: "relative", paddingTop: "100%", aspectRatio: 8 / 9 }}>
      <Image src={src} className="img-fluid" alt="" fill objectFit="cover" />
    </div>
  );
};
