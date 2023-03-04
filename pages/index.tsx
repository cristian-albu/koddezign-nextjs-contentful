import CallToActionSection from "@/components/Layout/CallToActionSection";
import HeroSection from "@/components/Layout/HeroSection";
import HomeAboutSection from "@/components/Layout/HomeAboutSection";
import HomeOfferSection from "@/components/Layout/HomeOfferSection";
import TestimonialsSection from "@/components/Layout/TestimonialsSection";
import clientsQuery from "@/lib/clientsQuery";
import { InferGetServerSidePropsType } from "next";

const Index = ({
  clientList,
  heroImgArrays,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  // TODO pass the arrays in the appropriate components > HERO images, client images, testimonials

  return (
    <>
      <HeroSection heroImgArrays={heroImgArrays} />
      <HomeAboutSection />
      <HomeOfferSection />
      <TestimonialsSection />
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

  // TODO Create the array on the server for client side display

  return {
    props: { clientList, heroImgArrays },
    // TODO revalidate: 1000 * 60 * 60 * 4,
  };
};
