import { MdOutlineImageSearch, MdOutlineShoppingCart } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BiCodeAlt, BiMessageDetail, BiPen } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import Image from "next/image";

export const sitePages = {
  home: "/",
  projects: "/projects",
  pricing: "/pricing",
  about: "/about-us",
  contact: "/contact",
};

export type NavItem = { title: string; link: string; icon: JSX.Element };

export type NavData = Array<NavItem>;

export const navData: NavData = [
  {
    title: ``,
    link: sitePages.home,
    icon: (
      <Image
        src={"/assets/logo_koddezign.svg"}
        width={28}
        height={28}
        alt="logo Koddezign"
        className="w-[1rem] h-[1rem] object-contain"
      />
    ),
  },
  {
    title: `Projects`,
    link: sitePages.projects,
    icon: <MdOutlineImageSearch />,
  },
  {
    title: `Pricing`,
    link: sitePages.pricing,
    icon: <MdOutlineShoppingCart />,
  },
  { title: `About us`, link: sitePages.about, icon: <FiUsers /> },
  { title: `Contact`, link: sitePages.contact, icon: <BiMessageDetail /> },
];

export const staticHeroData = {
  title: `Love at first [web]site`,
  description: `You know, we've seen so many businesses struggle with their online presence. Maybe your website is outdated and not search engine optimized, or perhaps, you don't have any website at all.`,
  buttonText: `Start a project`,
  buttonIcon: <BiMessageDetail />,
  buttonLink: sitePages.contact,
};

export const staticHomeAboutData = {
  title: `Hello, we're Koddezign! `,
  phoneticExplanation: `co-di-zain`,
  illustration: "/assets/Koddezign_illustration.svg",
  description: `A web design agency that wants to help with your website.`,
  buttonText: `See more about us`,
  buttonIcon: <FiUsers />,
  buttonLink: sitePages.about,
  subSectionTitle: `Why a website?`,
  subSectionDescription: `A website can be like a home for your business, where all the roads from social media and google searches lead. People land there and expect clarity on what you do, how you do it, for whom you do it, and most importantly, why you do it.`,
};

export type StaticOfferData = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon: JSX.Element;
  mainImage: string;
  keyBenefits: Array<{ icon: JSX.Element; text: string }>;
};

export const staticOfferSection: StaticOfferData = {
  title: `We work so you don't have to`,
  description: `We'll create a visually appealing, custom-tailored website that aligns with your brand's unique look and feel. Imagine having all the key elements for a successful website:`,
  buttonText: `View our pricing`,
  buttonIcon: <MdOutlineShoppingCart />,
  buttonLink: sitePages.pricing,
  mainImage: `/assets/astadia_showcase_mockup.png`,
  keyBenefits: [
    {
      icon: <BsJournalBookmark />,
      text: `Compelling and optimized content, crafted with a well-thought-out strategy, persuasive copywriting, and organic SEO.`,
    },
    {
      icon: <BiPen />,
      text: `Engaging and personalized design, with clean layouts, informative graphics, and interactive animations that leave a lasting impression.`,
    },
    {
      icon: <BiCodeAlt />,
      text: `Cutting-edge development, with custom functionalities, seamless integrations, and fully-responsive interfaces that adapt to any device.`,
    },
  ],
};

export const staticTestimonialData = {
  title: `You probably have a great business, so you deserve more visibility.`,
  buttonText: `See our projects`,
  buttonIcon: <MdOutlineImageSearch />,
  buttonLink: sitePages.projects,
};

export const staticCallToActionData = {
  title: `So let's take this step together. `,
  description: `Contact us for a free consultation, to evaluate your website and discover the potential for improvement or to start building something from scratch. We’re offering a 30% discount for businesses that have teams smaller than 6 people until the first of May, 2023.`,
  buttonText: `Let's start a project`,
  buttonIcon: <BiMessageDetail />,
  buttonLink: sitePages.contact,
};

export const staticFooterData = {};
