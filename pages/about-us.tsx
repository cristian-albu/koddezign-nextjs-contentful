import Image from "next/image";
import React from "react";
import { staticAboutData as data } from "@/data/staticData";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-center items-center px-[2rem] py-[5vh] min-h-[100vh] bg-gradient-to-tr from-white to-gray-100">
      <div className="flex justify-center items-center w-full max-w-[1200px]">
        <Image src={data.image} width={600} height={400} alt="Koddezign team" />
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-5xl">{data.title}</h1>
          <p>{data.text}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
