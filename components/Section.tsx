import React from "react";

const Section = ({ children, bg }: any) => {
  return (
    <section
      className={` p-[2rem] md:p-[5rem] xl:p-[8rem] 2xl:p-[12rem] flex flex-col justify-start items-center text-black ${
        bg ? `bg-${bg}` : ""
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
