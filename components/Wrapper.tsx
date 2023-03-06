import React from "react";

const Wrapper = ({ children }: any) => {
  return (
    <div className="w-full flex  flex-col justify-center items-stretch max-w-[1200px] h-full relative">
      {children}
    </div>
  );
};

export default Wrapper;
