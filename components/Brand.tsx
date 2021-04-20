import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
};

const Brand = ({ src, alt, width, height }: Props) => (
  <Image src={src} alt={alt} width={width} height={height} />
);

export default Brand;
