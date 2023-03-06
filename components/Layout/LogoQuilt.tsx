import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoQuilt = ({
  logoQuilt,
}: {
  logoQuilt: Array<{ logo: string; link: string; name: string }>;
}) => {
  return (
    <section className="flex justify-center bg-white px-[2rem] py-[5rem] items-center">
      <div className="flex w-full flex-wrap max-w-[1200px] justify-center items-center">
        {logoQuilt.map(
          (clientLogo: { logo: string; link: string; name: string }) => (
            <a
              href={clientLogo.link}
              key={clientLogo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[33%] md:w-[16%] p-5 flex justify-center items-center"
              aria-label={`${clientLogo.name}`}
            >
              <Image
                src={clientLogo.logo}
                width={120}
                height={80}
                alt=""
                className="w-full aspect-video"
              />
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default LogoQuilt;
