import BlurBall from "@/components/BlurBall";
import DynHead from "@/components/DynHead";
import clientsQuery from "@/lib/clientsQuery";
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function manageProgressBar(number: number) {
  switch (true) {
    case number < 25:
      return "bg-orange-400 text-black";
    case number < 50:
      return "bg-orange-200 text-black";
    case number < 60:
      return "bg-yellow-400 text-black";
    case number < 70:
      return "bg-yellow-200 text-black";
    case number < 80:
      return "bg-lime-400 text-black";
    case number < 90:
      return "bg-green-400 text-black";
    case number <= 100:
      return "bg-teal-400 text-black";
    default:
      return "bg-black text-white";
  }
}

const Projects = ({
  ProjectList,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
  }, []);

  const attributes = !isMobile && {
    initial: { opacity: 0, x: "50px" },
    whileInView: { opacity: 1, x: "0px" },
    transition: { type: "spring", damping: 15 },
  };

  return (
    <>
      <DynHead
        title="Our Projects"
        description={`We&apos;ll create a visually appealing, custom-tailored website that aligns with your brand&apos;s unique look and feel. Imagine having all the key elements for a successful website`}
        image="/assets/astadia_showcase_mockup.png"
      />
      <section className="flex flex-col justify-center items-center px-[2rem] py-[20vh] bg-gradient-to-tr from-white to-gray-100 relative">
        <BlurBall horizontal="right-[-5%]" vertical="top-[-15%]" />
        <BlurBall horizontal="left-[-15%]" vertical="top-[30%]" />
        <BlurBall horizontal="right-[-15%]" vertical="bottom-[5%]" />
        <div className="flex w-full max-w-[1200px] items-start justify-center mb-5 md:mb-[-5rem] relative flex-col">
          <h1 className="w-full text-2xl md:text-5xl">Our projects</h1>
          <h2 className="mt-3">Each and every one of them has a story</h2>
        </div>
        <div className="flex flex-wrap justify-between items-start w-full max-w-[1200px] relative">
          {ProjectList.map((item: ProjectItem, index: number) => (
            <motion.div
              key={item.id}
              className={`w-full md:w-[31%] flex flex-col justify-start items-start relative mb-5  ${
                index % 3 == 0 && "top-0 md:top-[10rem]"
              } ${index % 3 == 1 && "top-0 md:top-[5rem]"} `}
              {...attributes}
            >
              {item.workInProgress && item.percentCompleted != undefined && (
                <div
                  className={`absolute top-0 right-0 text-xs   px-3 py-2 rounded-md ${manageProgressBar(
                    item.percentCompleted
                  )}`}
                >
                  {item.percentCompleted}%
                </div>
              )}
              <Image
                src={item.mainPhoto}
                width={400}
                height={400}
                alt={`${item.name} website photo`}
                className="w-[90%] h-auto object-contain rounded-md border-4 border-y-8 border-white shadow-black/20 shadow-xl"
              />
              <div className="flex items-start">
                <div className="w-[75%] mt-5">
                  <div className="flex gap-5 items-center my-3 flex-wrap pr-5">
                    {item.services.map((service: ClientServices) => (
                      <div key={service.title}>
                        <div className="serviceIconContainer relative cursor-pointer">
                          <Image
                            src={service.img}
                            width={25}
                            height={25}
                            alt={service.title}
                            className="object-contain w-[1.5rem] h-auto"
                          />
                          <div className="absolute z-[10] bottom-[100%] left-[100%] bg-black text-white p-3 text-sm rounded-md">
                            {service.title}
                          </div>
                        </div>
                        <style jsx>{`
                          .serviceIconContainer div {
                            transform: scale(0);
                          }

                          .serviceIconContainer:hover div {
                            transform: scale(1);
                          }
                        `}</style>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-lg md:text-xl my-3 hover:text-[#ff5500] transition">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </h3>

                  <p className="w-full pt-[1rem] border-t-[1px] border-t-gray-400 border-dashed">
                    {item.projectTitle}
                  </p>
                </div>

                <Image
                  src={item.mobilePhoto}
                  width={200}
                  height={400}
                  alt={`${item.name} website mobile photo`}
                  className="w-[20%] h-auto object-contain relative mt-[-20%] rounded-sm border-2 border-y-4 border-white shadow-black/20 shadow-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const clientList = await clientsQuery();

  const ProjectList = clientList.map((item: Client) => ({
    id: item.id,
    name: item.name,
    logo: item.logo,
    link: item.link,
    projectTitle: item.projectTitle,
    description: item.description,
    services: item.services,
    mainPhoto: item.mainPhoto,
    mobilePhoto: item.mobilePhoto,
    workInProgress: item.workInProgress,
    percentCompleted:
      item.percentCompleted != undefined ? item.percentCompleted : 0,
  }));

  return {
    props: { ProjectList },
    revalidate: 1000 * 60 * 60 * 4,
  };
};
