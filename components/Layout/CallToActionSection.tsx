import React from "react";
import { staticCallToActionData as data } from "@/data/staticData";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="flex justify-center items-center px-[2rem] py-[10rem] bg-gradient-to-br from-white to-gray-100">
      <div className="w-full flex  flex-col justify-center items-center max-w-[800px]">
        <h2 className="text-2xl md:text-4xl text-center">{data.title}</h2>
        <p className="text-center my-5">{data.description}</p>
        <Link href={data.buttonLink} className="btnPrimary">
          {data.buttonIcon}
          {data.buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
