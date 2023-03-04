import React from "react";
import { staticHomeAboutData as data } from "@/data/staticData";
import Image from "next/image";
import Link from "next/link";
import BlurBall from "../BlurBall";

const HomeAboutSection = () => {
  return (
    <section className="w-full px-[2rem] flex justify-center items-center py-[5rem] relative">
      <BlurBall vertical="bottom-[60%]" horizontal="left-[90%] " />

      <div className="max-w-[1200px] flex flex-wrap justify-center   items-center">
        <div className="w-full md:w-[40%] flex justify-center items-center border-b-[1px] border-b-gray-400 border-dashed">
          <Image
            src={data.illustration}
            width={300}
            height={200}
            alt=""
            className="w-[70%] h-auto pointer-events-none"
          />
        </div>
        <div className="w-full md:w-[60%] flex flex-col justify-center items-start gap-3 pl-[2rem] py-[2rem] border-l-[1px] border-l-gray-400 border-dashed">
          <h2 className="text-2xl md:text-4xl">{data.title}</h2>
          <p className="italic">{data.phoneticExplanation}</p>
          <p className="text-xl">{data.description}</p>
          <Link href={data.buttonLink} className="btnPrimary mb-5">
            {data.buttonIcon}
            {data.buttonText}
          </Link>
          <h3 className="text-xl md:text-xl">{data.subSectionTitle}</h3>
          <p>{data.subSectionDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
