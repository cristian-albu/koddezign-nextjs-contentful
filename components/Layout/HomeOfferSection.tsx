import React from "react";
import { OfferItem, staticOfferSection as data } from "@/data/staticData";
import Image from "next/image";
import Link from "next/link";
import BlurBall from "../BlurBall";

const HomeOfferSection = () => {
  return (
    <section className="flex justify-center items-center flex-wrap px-[2rem] py-[5rem] relative bg-gradient-to-br from-white to-gray-100">
      <BlurBall
        vertical="bottom-[50%]"
        horizontal="right-[95%]"
        size="w-[10vw]"
      />
      <div className="flex flex-wrap w-full max-w-[1200px] mb-[2rem] relative">
        <div className="w-full md:w-[33%] flex flex-col justify-center gap-3 items-start">
          <h2 className="text-xl md:text-3xl mb-5 border-b-[1px] border-b-gray-400 border-dashed pb-5">
            {data.title}
          </h2>
          <p>{data.description}</p>
        </div>
        <Image
          src={data.mainImage}
          width={900}
          height={600}
          alt=""
          className="w-full md:w-[66%] h-auto object-contain pointer-events-none"
        />
      </div>

      <div className="flex flex-wrap w-full max-w-[1200px] justify-between">
        {data.keyBenefits.map((benefit: OfferItem, index: number) => (
          <div
            key={index}
            className="w-full md:w-[30%] pl-[1.5rem] pt-[1.5rem] border-l-[1px] border-l-gray-400 border-dashed"
          >
            <span className="text-4xl text-[#ff5500]">{benefit.icon}</span>
            <h3 className="text-xl md:text-2xl my-3">{benefit.title}</h3>
            <p>{benefit.text}</p>
          </div>
        ))}
      </div>

      <div className="flex mt-[4rem] w-full justify-center items-center">
        <Link href={data.buttonLink} className="btnPrimary">
          {data.buttonIcon}
          {data.buttonText}
        </Link>
      </div>
    </section>
  );
};

export default HomeOfferSection;
