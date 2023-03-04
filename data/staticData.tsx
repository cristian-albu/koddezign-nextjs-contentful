import { MdOutlineImageSearch, MdOutlineShoppingCart } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BiBookOpen, BiCodeAlt, BiMessageDetail, BiPen } from "react-icons/bi";
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
        width={32}
        height={32}
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
  description: `We make websites`,
  buttonText: `See more about us`,
  buttonIcon: <FiUsers />,
  buttonLink: sitePages.about,
  subSectionTitle: `But why would you need a website?`,
  subSectionDescription: `A website is like a home for your business, where all the roads from social media and web searches lead. People land there and expect clarity on what you do, how you do it, for whom you do it, and most importantly, why you do it.`,
};

export type OfferItem = {
  title: string;
  icon: JSX.Element;
  text: string;
};

export type StaticOfferData = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon: JSX.Element;
  mainImage: string;
  keyBenefits: Array<OfferItem>;
};

export const staticOfferSection: StaticOfferData = {
  title: `We'll work on what we do best so that you can focus on what you do best`,
  description: `We'll create a visually appealing, custom-tailored website that aligns with your brand's unique look and feel. Imagine having all the key elements for a successful website:`,
  buttonText: `View our pricing`,
  buttonIcon: <MdOutlineShoppingCart />,
  buttonLink: sitePages.pricing,
  mainImage: `/assets/astadia_showcase_mockup.png`,
  keyBenefits: [
    {
      title: `Content`,
      icon: <BiBookOpen />,
      text: `Compelling and optimized content, crafted with a well-thought-out strategy, persuasive copywriting, and organic SEO.`,
    },
    {
      title: `Design`,
      icon: <BiPen />,
      text: `Engaging and personalized design, with clean layouts, informative graphics, and interactive animations that leave a lasting impression.`,
    },
    {
      title: `Development`,
      icon: <BiCodeAlt />,
      text: `Cutting-edge development, with custom functionalities, seamless integrations, and fully-responsive interfaces that adapt to any device.`,
    },
  ],
};

export const staticTestimonialData = {
  title: `What our clients think of us`,

  buttonText: `See our projects`,
  buttonIcon: <MdOutlineImageSearch />,
  buttonLink: sitePages.projects,
};

export const staticCallToActionData = {
  title: `You probably have a great business, so let's get you more visibility.`,
  description: `So let's take this step together. Contact us for a free consultation, to evaluate your website and discover the potential for improvement or to start building something from scratch. `,
  buttonText: `Let's start a project`,
  buttonIcon: <BiMessageDetail />,
  buttonLink: sitePages.contact,
};

export const staticFooterData = {};

export const staticAboutData = {
  title: `Hello`,
  text: "We're Koddezign",
  image: "/assets/Koddezign_illustration.svg",
};
