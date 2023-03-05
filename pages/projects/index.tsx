import BlurBall from "@/components/BlurBall";
import clientsQuery from "@/lib/clientsQuery";
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import React from "react";

const Projects = ({
  ProjectList,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <section className="flex flex-col justify-center items-center px-[2rem] py-[20vh] bg-gradient-to-tr from-white to-gray-100 relative">
        <BlurBall horizontal="right-[-5%]" vertical="top-[-15%]" />
        <BlurBall horizontal="left-[-15%]" vertical="top-[30%]" />
        <BlurBall horizontal="right-[-15%]" vertical="bottom-[5%]" />
        <div className="flex w-full max-w-[1200px] items-start justify-center mb-5 md:mb-[-5rem] relative">
          <h1 className="w-full text-2xl md:text-5xl">Our projects</h1>
        </div>
        <div className="flex flex-wrap justify-between items-start w-full max-w-[1200px] relative">
          {ProjectList.map((item: ProjectItem, index: number) => (
            <div
              key={item.id}
              className={`w-full md:w-[33%] flex flex-col justify-start items-start relative mb-5  ${
                index % 3 == 0 && "top-0 md:top-[10rem]"
              } ${index % 3 == 1 && "top-0 md:top-[5rem]"} `}
            >
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
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg md:text-xl my-3 hover:text-[#ff5500] transition">
                      {item.name}
                    </h3>
                  </a>

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
            </div>
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
  }));

  return {
    props: { ProjectList },
    revalidate: 1000 * 60 * 60 * 4,
  };
};
