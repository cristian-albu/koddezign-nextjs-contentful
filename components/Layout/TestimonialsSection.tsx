import React from "react";
import { staticTestimonialData as data } from "@/data/staticData";
import Image from "next/image";
import BlurBall from "../BlurBall";

const TestimonialsSection = ({
  clientTestimonials,
}: {
  clientTestimonials: Array<TestimonialItem>;
}) => {
  return (
    <section className="flex flex-col justify-center items-center px-[2rem] py-[5rem] relative">
      <BlurBall vertical="top-0" horizontal="right-[-15%]" />
      <BlurBall vertical="bottom-0" horizontal="left-[-15%]" />

      <div className="w-full max-w-[1200px] mb-[8rem]">
        <h2 className="mx-auto text-2xl md:text-4xl text-center max-w-[80%]">
          {data.title}
        </h2>
      </div>
      <div className="flex flex-wrap w-full max-w-[1200px] justify-between items-start ">
        {clientTestimonials.map((item: TestimonialItem) => (
          <div
            key={item.person}
            className="mb-[5rem] md:mb-0 bg-white/80 p-8 border-2 border-gray-200 w-full md:w-[31%] rounded-lg backdrop-blur-md drop-shadow-[35px_55px_25px_rgba(0,0,0,0.25)]"
          >
            <div className="flex justify-center items-center relative w-[8rem] h-[8rem] object-cover rounded-full shadow-xl shadow-black/20 mb-5 mt-[-6rem] mx-auto">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.person}
                className="w-full h-full object-cover rounded-full"
              />
              <Image
                src={item.companyLogo}
                width={50}
                height={50}
                alt={item.company}
                className="w-[3rem] h-[3rem] rounded-full bg-white absolute bottom-[-1rem] right-[-1rem] object-contain p-1 border-white border-2 shadow-black/20 shadow-lg"
              />
            </div>

            <h3 className="text-xl ">{item.person}</h3>
            <span className="flex flex-col my-3 pb-5 border-b-[1px] border-b-gray-400 border-dashed ml-[-2rem] pl-[2rem] max-w-[90%]">
              <p className="mr-1 italic">{item.position}</p>
              <a
                href={item.companyLink}
                className="text-[#ff5500]"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ {item.company}
              </a>
            </span>

            {item.testimonial}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
