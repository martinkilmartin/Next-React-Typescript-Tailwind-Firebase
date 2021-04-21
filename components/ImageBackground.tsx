import React, { ReactNode } from "react";

type Props = {
  styles: string;
  children?: ReactNode;
};

const ImageBackground = ({ children, styles }: Props) => (
  <div className={styles}>{children}</div>
);

export default ImageBackground;
