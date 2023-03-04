import React from "react";

export type BlurBall = {
  vertical: string;
  horizontal: string;
  size?: string;
};

const BlurBall = ({ vertical, horizontal, size }: BlurBall) => {
  return (
    <div
      className={`absolute ${vertical} ${horizontal} ${
        size ? size : "w-[20vw]"
      } aspect-square bg-[#ff5500]/20 rounded-full blur-[80px]`}
    />
  );
};

export default BlurBall;
