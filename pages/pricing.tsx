import BlurBall from "@/components/BlurBall";
import Wrapper from "@/components/Wrapper";
import servicesQuery from "@/lib/servicesQuery";
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Pricing = ({
  clientList,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [tabState, setTabState] = useState(0);

  return (
    <section className="grid items-center justify-items-center px-[2rem]  min-h-[100vh] py-[6rem] relative ">
      <BlurBall horizontal="right-[-5%]" vertical="top-[-15%]" />
      <BlurBall horizontal="left-[-10%]" vertical="bottom-0" />
      <Wrapper>
        <div className="flex justify-between w-full flex-wrap">
          <div className="w-full md:w-[30%] flex flex-col">
            <div className="w-full mb-[3rem] border-b-[1px] border-b-gray-400 border-dashed pb-5">
              <div className="text-2xl md:text-5xl mb-3 flex gap-3">
                <MdOutlineShoppingCart /> <h1 className="">Pricing</h1>
              </div>

              <p>Here are our website packages</p>
            </div>
            <div className="flex flex-row md:flex-col justify-between md:justify-start items-start mb-5 ">
              {clientList.map((item: Service, index: number) => (
                <button
                  key={item.id}
                  className={`w-[32%] md:w-full bg-white p-3 md:p-5 shadow-black/15 shadow-lg rounded-lg flex flex-col justify-start items-start text-left border-2 mb-5 ${
                    tabState == index ? "border-[#ff5500]" : "transparent"
                  }`}
                  onClick={() => setTabState(index)}
                >
                  <p className="text-md md:text-xl font-bold mb-2">
                    {item.title}
                  </p>
                  <p className="text-sm">{item.description.slice(0, 50)}...</p>
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[66%] mb-10  flex items-start  justify-between relative ">
            {clientList.map((item: Service, index: number) => (
              <div
                key={item.id + index}
                className={`w-full min-w-full flex flex-col items-start justify-start transition-opacity duration-300 ${
                  tabState == index
                    ? " opacity-1  relative"
                    : " opacity-0  absolute"
                }`}
              >
                <div className="flex flex-col items-center justify-start relative mb-5 w-[60%] md:w-[40%] mx-auto">
                  <div className=" pb-6 bg-white  rounded-md shadow-black/20 shadow-lg relative z-[5]">
                    <Image
                      src={item.image}
                      width={350}
                      height={200}
                      alt=""
                      className="w-full h-auto object-contain rounded-t-md border-black border-4 "
                    />
                  </div>
                  <div className="w-[20%] h-[1.5rem] bg-gray-100 shadow-black/20 shadow-lg relative z-[3]" />
                  <div className="w-[40%] h-[0.7rem] bg-white shadow-black/20 shadow-lg rounded-tr-2xl rounded-tl-2xl relative z-[4]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="mb-3 text-sm">{item.description}</p>

                <p className="mb-2">This may include:</p>
                <ul className="flex flex-wrap items-center">
                  {item.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="pl-3 w-full md:w-1/2 border-l-[1px] border-l-gray-400 border-dashed mb-3 text-sm"
                    >
                      <p className="">✅ {feature}</p>
                    </li>
                  ))}
                </ul>

                <p className="my-5">
                  Technologies that may be used for this service:
                </p>

                <div className="flex flex-wrap mb-5">
                  {item.services.map((subServices: ClientServices) => (
                    <div
                      key={subServices.title}
                      className="w-1/3 mb-3 gap-2 flex items-center justify-start"
                    >
                      <Image
                        src={subServices.img}
                        width={20}
                        height={20}
                        alt={subServices.title}
                      />
                      <p className="text-xs">{subServices.title}</p>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl md:text-2xl  mb-5">
                  Starting at{" "}
                  <span className="text-[#ff5500] font-bold">
                    {item.startingPrice}$
                  </span>
                </h4>
                <Link href={"/contact"} className="btnPrimary mb-10">
                  Let's start a project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Pricing;

export const getStaticProps = async () => {
  const clientList = await servicesQuery();

  return {
    props: { clientList },
    revalidate: 1000 * 60 * 60 * 4,
  };
};
