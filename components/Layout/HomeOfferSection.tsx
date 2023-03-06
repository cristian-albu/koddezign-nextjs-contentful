import React from "react";
import { OfferItem, staticOfferSection as data } from "@/data/staticData";
import Image from "next/image";
import Link from "next/link";
import BlurBall from "../BlurBall";
import { motion } from "framer-motion";

const HomeOfferSection = ({ isMobile }: { isMobile: boolean }) => {
  const attributes = !isMobile && {
    initial: { opacity: 0, x: "-100px" },
    whileInView: { opacity: 1, x: "0px" },
    transition: { type: "spring", damping: 15 },
  };

  const attributes2 = !isMobile && {
    initial: { opacity: 0, x: "100px" },
    whileInView: { opacity: 1, x: "0px" },
    transition: { type: "spring", damping: 15 },
  };

  const attributes3 = !isMobile && {
    initial: { opacity: 0, y: "100px" },
    whileInView: { opacity: 1, y: "0px" },
    transition: { type: "spring", damping: 15 },
  };
  return (
    <section className="flex justify-center items-center flex-wrap px-[2rem] py-[5rem] relative bg-gradient-to-br from-white to-gray-100">
      <BlurBall
        vertical="bottom-[50%]"
        horizontal="right-[95%]"
        size="w-[10vw]"
      />
      <div className="flex flex-wrap w-full max-w-[1200px] mb-[2rem] relative">
        <motion.div
          className="w-full md:w-[33%] flex flex-col justify-center gap-3 items-start"
          {...attributes}
        >
          <h2 className="text-xl md:text-3xl mb-5 border-b-[1px] border-b-gray-400 border-dashed pb-5">
            {data.title}
          </h2>
          <p>{data.description}</p>
        </motion.div>
        <motion.div className="w-full mt-5 md:mt-0 md:w-[66%]" {...attributes2}>
          <Image
            src={data.mainImage}
            width={900}
            height={600}
            alt=""
            className="w-full h-auto object-contain pointer-events-none"
          />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-wrap w-full max-w-[1200px] justify-between"
        {...attributes3}
      >
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
      </motion.div>

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
