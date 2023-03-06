import React from "react";

const Section = ({ children, bg }: any) => {
  return (
    <section
      className={` px-[2rem] md:px-[5rem] xl:px-[8rem] 2xl:px-[12rem] py-[5rem] flex flex-col justify-start items-center text-black ${
        bg ? `bg-${bg} ` : ""
      } ${bg == "black" && "text-white"}`}
    >
      {children}
    </section>
  );
};

export default Section;
