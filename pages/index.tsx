import DynHead from "@/components/DynHead";
import CallToActionSection from "@/components/Layout/CallToActionSection";
import HeroSection from "@/components/Layout/HeroSection";
import HomeAboutSection from "@/components/Layout/HomeAboutSection";
import HomeBenefitsSection from "@/components/Layout/HomeBenefitsSection";
import HomeOfferSection from "@/components/Layout/HomeOfferSection";
import LogoQuilt from "@/components/Layout/LogoQuilt";
import TestimonialsSection from "@/components/Layout/TestimonialsSection";
import clientsQuery from "@/lib/clientsQuery";
import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

const Index = ({
  clientTestimonials,
  heroImgArrays,
  logoQuilt,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
  }, []);

  return (
    <>
      <DynHead
        title="Koddezign"
        description={`You know, we&apos;ve seen so many businesses struggle with their online presence. Maybe your website is outdated and not search engine optimized, or perhaps, you don&apos;t have any website at all.`}
        image="/assets/Koddezign_illustration.svg"
      />
      <HeroSection heroImgArrays={heroImgArrays} isMobile={isMobile} />
      <HomeAboutSection isMobile={isMobile} />
      <LogoQuilt logoQuilt={logoQuilt} />
      <HomeOfferSection isMobile={isMobile} />
      {/* <HomeBenefitsSection /> */}
      <TestimonialsSection
        clientTestimonials={clientTestimonials}
        isMobile={isMobile}
      />
      <CallToActionSection />
    </>
  );
};
export default Index;

export const getStaticProps = async () => {
  const clientList = await clientsQuery();

  const heroImgArr1 = clientList
    .filter((item: Client, index: number) => index < 3)
    .map((item: Client) => item.mainPhoto);

  const heroImgArr2 = clientList
    .filter((item: Client, index: number) => index >= 3 && index < 6)
    .map((item: Client) => item.mainPhoto);

  const heroImgArrays = [heroImgArr1, heroImgArr2];

  const logoQuilt = clientList.map((item: Client) => ({
    logo: item.logo,
    link: item.link,
    name: item.name,
  }));

  const clientTestimonials = clientList
    .filter((item: Client) => item.hasTestimonial)
    .map((item: Client) => ({
      person: item.keyPerson,
      position: item.keyPersonPosition,
      image: item.keyPersonImg,
      testimonial: item.testimonial,
      company: item.name,
      companyLogo: item.logo,
      companyLink: item.link,
    }));

  return {
    props: { heroImgArrays, logoQuilt, clientTestimonials },
    revalidate: 1000 * 60 * 60 * 4,
  };
};
