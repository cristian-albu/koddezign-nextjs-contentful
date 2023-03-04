import React from "react";
import { staticHeroData as data } from "@/data/staticData";
import Link from "next/link";
import Image from "next/image";

const styles = {
  imageArray: `h-full  min-h-[50vh] md:min-h-[80vh] w-[49%] flex flex-col justify-start items-start relative`,
  img: `w-full object-contain mb-5 border-2 border-white shadow-2xl shadow-black/30 relative z-[5]`,
  dottedLineVertical: `absolute top-0  border-l-[1px] border-l-gray-400  border-dashed z-[4]`,
  dottedLineHorizontal: `absolute border-b-[1px] border-b-gray-400  border-dashed z-[4]`,
};

const HeroSection = ({
  heroImgArrays,
}: {
  heroImgArrays: Array<Array<string>>;
}) => {
  return (
    <section className="flex flex-wrap justify-center items-center md:flex-row-reverse px-[2rem]">
      <div className="max-w-[600px] w-full md:w-1/2 relative flex justify-between items-center md:pl-[5%] ">
        <div className={`${styles.imageArray} mt-[10%]`}>
          <div
            className={`${styles.dottedLineHorizontal} top-0 right-0 w-[185%]`}
          />
          {heroImgArrays[0].map((item: string) => (
            <Image
              src={item}
              width={500}
              height={300}
              alt={""}
              key={item}
              className={styles.img}
            />
          ))}
          <div className={`${styles.dottedLineVertical} left-0 h-[85%]`} />
        </div>
        <div className={`${styles.imageArray} mt-[30%]`}>
          <div
            className={`${styles.dottedLineHorizontal} top-[71%] left-0 w-[150%]`}
          />
          {heroImgArrays[1].map((item: string) => (
            <Image
              src={item}
              width={500}
              height={300}
              alt={""}
              key={item}
              className={styles.img}
            />
          ))}
          <div className={`${styles.dottedLineVertical} left-0 h-[85%]`} />
          <div className={`${styles.dottedLineVertical} right-0 h-full`} />
        </div>
      </div>

      <div className="max-w-[600px] flex flex-col items-start w-full md:w-1/2  md:pr-[10vw] gap-5 ">
        <h1 className="text-3xl md:text-5xl">{data.title}</h1>
        <p>{data.description}</p>

        <Link href={data.buttonLink} className="btnPrimary">
          {data.buttonIcon}
          {data.buttonText}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
