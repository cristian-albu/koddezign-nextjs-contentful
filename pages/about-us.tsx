import Image from "next/image";
import React from "react";
import { staticAboutData as data } from "@/data/staticData";
import Wrapper from "@/components/Wrapper";
import Section from "@/components/Section";
import DynHead from "@/components/DynHead";

const AboutUs = () => {
  return (
    <>
      <DynHead
        title="About us"
        description={`We&apos;re a small team of designers, developers and content writers that loves to bring awesome businesses to light through 100% custom websites.`}
        image="/assets/Koddezign_illustration.svg"
      />
      <Section bg={`gradient-to-tr from-white to-gray-100`}>
        <Wrapper>
          <div className="flex w-full flex-wrap items-center justify-between my-[10rem]">
            <Image
              src={data.image}
              width={600}
              height={400}
              alt="Koddezign team"
              className="w-full md:w-[40%] h-auto border-b-[1px] border-b-gray-400 border-r-[1px] border-r-gray-400  border-dashed px-[2rem]"
            />
            <div className="w-full md:w-[55%]">
              <h1 className="text-2xl md:text-5xl">{data.title}</h1>
              <p>{data.text}</p>
              <p className="my-5">
                We&apos;re a small team of designers, developers and content
                writers that loves to bring awesome businesses to light through
                100% custom websites. With so many templates floating around, we
                fear that what makes a business special may be lost in a sea of
                look-alikes. We love what we do and we hope you will do too.
              </p>
              <p className="text-xl mb-3">Social media:</p>
              <ul className="flex flex-col justify-start items-start gap-3">
                <li>
                  <a
                    href="https://www.facebook.com/koddezign.marketing"
                    className="hover:text-[#ff5500] transition underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/koddezign/"
                    className="hover:text-[#ff5500] transition underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/koddezign"
                    className="hover:text-[#ff5500] transition underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default AboutUs;
