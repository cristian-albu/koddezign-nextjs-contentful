import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Merriweather } from "@next/font/google";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";
import Gdpr from "@/components/Gdpr";
import PrivacyContext from "@/context/privacyContext";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["cyrillic", "latin-ext"],
  variable: "--merriweather",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div
      className={`${merriweather.className} ${merriweather.variable}`}
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      <Head>
        <meta property="og:site_name" content="Koddezign" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PrivacyContext>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.2,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
          >
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </motion.div>
        </AnimatePresence>
        <Gdpr />
      </PrivacyContext>
    </div>
  );
}
