import React from "react";
import { staticHeroData as data } from "@/data/staticData";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const styles = {
  imageArray: `h-full  min-h-[50vh] md:min-h-[80vh] w-[49%] flex flex-col justify-start items-start relative`,
  img: `w-full object-contain mb-5 border-2 border-white drop-shadow-[15px_25px_10px_rgba(0, 0, 0, 20)] md:drop-shadow-[35px_55px_25px_rgba(0,0,0,0.25)] relative z-[5]`,
  dottedLineVertical: `absolute  border-l-[1px] border-l-gray-400  border-dashed z-[4]`,
  dottedLineHorizontal: `absolute border-b-[1px] border-b-gray-400  border-dashed z-[4]`,
};

const HeroSection = ({
  heroImgArrays,
  isMobile,
}: {
  heroImgArrays: Array<Array<string>>;
  isMobile: boolean;
}) => {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 300], [0, -200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const attributes = !isMobile && {
    initial: { opacity: 0, x: "-100px" },
    whileInView: { opacity: 1, x: "0px" },
    transition: { type: "spring", damping: 15 },
  };

  return (
    <section className="flex flex-wrap justify-center items-center relative md:flex-row-reverse px-[2rem] bg-gradient-to-tr from-white to-gray-200">
      <div className="absolute right-[95%] top-[50%] w-[20vw] aspect-square bg-[#ff5500]/20 rounded-full blur-[80px]" />
      <div className="absolute left-[90%] bottom-[90%] w-[20vw] aspect-square bg-[#ff5500]/20 rounded-full blur-[80px]" />
      <div className="max-w-[600px] w-full md:w-1/2 relative flex justify-between items-center md:pl-[5%] ">
        <div className={`${styles.imageArray} mt-[10%]`}>
          <div
            className={`${styles.dottedLineHorizontal} top-0 right-0 w-[185%]`}
          />

          <motion.div
            style={{ y: y1 }}
            className="relative z-[50]"
            transition={{ duration: 2, ease: "easeOut" }}
          >
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
          </motion.div>

          <div
            className={`${styles.dottedLineVertical} left-0 top-0  h-[85%]`}
          />
        </div>
        <div className={`${styles.imageArray} mt-[30%]`}>
          <div
            className={`${styles.dottedLineHorizontal} top-[71%] left-[-15%] w-[170%]`}
          />
          <motion.div
            style={{ y: y2 }}
            className="relative z-[50]"
            transition={{ duration: 2, ease: "easeOut" }}
          >
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
          </motion.div>
          <div
            className={`${styles.dottedLineVertical} left-0 top-[-20%]  h-[115%]`}
          />
          <div
            className={`${styles.dottedLineVertical} right-0 top-0  h-full`}
          />
        </div>
      </div>

      <motion.div
        className="max-w-[600px] flex flex-col items-start w-full md:w-1/2  md:pr-[10vw] gap-5 "
        {...attributes}
      >
        <h1 className="text-3xl md:text-6xl md:leading-[1.3]">{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.description2}</p>

        <Link href={data.buttonLink} className="btnPrimary">
          {data.buttonIcon}
          {data.buttonText}
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
