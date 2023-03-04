import CallToActionSection from "@/components/Layout/CallToActionSection";
import HeroSection from "@/components/Layout/HeroSection";
import HomeAboutSection from "@/components/Layout/HomeAboutSection";
import HomeOfferSection from "@/components/Layout/HomeOfferSection";
import LogoQuilt from "@/components/Layout/LogoQuilt";
import TestimonialsSection from "@/components/Layout/TestimonialsSection";
import clientsQuery from "@/lib/clientsQuery";
import { InferGetServerSidePropsType } from "next";

const Index = ({
  clientTestimonials,
  heroImgArrays,
  logoQuilt,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <HeroSection heroImgArrays={heroImgArrays} />
      <HomeAboutSection />
      <LogoQuilt logoQuilt={logoQuilt} />
      <HomeOfferSection />
      <TestimonialsSection clientTestimonials={clientTestimonials} />
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
