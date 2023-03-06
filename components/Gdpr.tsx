import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useContext,
} from "react";
import { setCookie, getCookie, hasCookie } from "cookies-next";

import {
  AiOutlineCheckCircle,
  AiOutlineSave,
  AiOutlineSetting,
} from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { PrivacyContext } from "@/context/privacyContext";

type Checkbox = {
  name?: string;
  text: string;
  onChange?: any;
  checked?: boolean;
  disabled?: boolean;
};

export function Checkbox({
  name,
  text,
  onChange,
  checked,
  disabled,
}: Checkbox) {
  return (
    <div className="cb-custom-cls">
      <label>
        <input
          name={name}
          id={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <div />
        <p>{text}</p>
      </label>
    </div>
  );
}

const styles = {
  container: `fixed bottom-0 left-0  flex flex-col justify-center items-center `,
  containerOpened: `w-[100vw] h-[100vh] p-[2rem] md:p-[4rem] 2xl:p-[5rem]`,
  prefButton: `absolute bottom-[1.5rem] left-[1.5rem] text-2xl bg-[#fff] p-1 drop-shadow-xl rounded-full cursor-pointer flex items-end`,
  bannerContainer: `absolute left-0 md:left-[10vw] bottom-0 bg-white text-black text-sm p-10 rounded-tl-[3rem]  rounded-tr-[3rem] drop-shadow-xl w-[100vw] md:w-[80vw] flex flex-col drop-shadow-2xl`,
  prefsContainer: `bg-white p-5 md:p-8 rounded-md drop-shadow-xl w-[100%] flex flex-col overflow-auto max-h-[80vh] items-start max-w-[1200px]`,
  close: `absolute w-[100%] h-[100%] transition bg-[#00000021] backdrop-blur-sm flex justify-end items-start pt-[5rem] pr-[3rem] cursor-pointer`,
  secondaryButton: `flex items-center cursor-pointer gap-2 bg-black shadow-md shadow-black/20 hover:shadow-lg hover:scale-[1.03] text-white rounded-md px-3 py-2 transition hover:bg-gray-800`,
  buttonContainer: `gap-5 flex  flex-wrap justify-between items-center w-full`,
  buttonContainer2: `w-full flex-col md:flex-row flex  flex-wrap justify-start gap-5 items-start md:items-center mb-5 md:mb-0`,
  label: `flex gap-1 cursor-pointer mb-3`,
};

const staticData = {
  banner: {
    title: `We use cookies`,
    desc: `We use cookies to improve your browsing experience and to personalize the content we present. The preferences menu allows you to control the types of cookies you accept.`,
    btnPrivacy: `Privacy policy`,
    btnPrefs: `Preferences`,
    btnRefuse: `Refuse all`,
    btnAccetp: `Accept all`,
  },
  preferences: {
    title: `Preferences`,
    seeMore: `See more on`,
    desc: `We use cookies to improve your browsing experience and to personalize the content we present. The preferences menu allows you to control the types of cookies you accept.`,
    essentialTitle: `Essential`,
    essentialDesc: `For the operation of the site. We need at least 1 cookie to store your choice (its name is "kdzConsentChoice")`,
    prefsTitle: `Preference`,
    prefDesc: `To be able to view certain types of content (example: Facebook posts or YouTube videos that use cookies)`,
    analyticsTitle: `Analytical`,
    analyticsDesc: `To measure website traffic and performance`,
    adsTitle: `Advertisement`,
    adsDesc: `To be able to customize advertisements. (At the moment we do not use ads)`,
    save: "Save",
  },
  privacy: {
    body: [
      `Simple explanation`,
      `This site uses hosting from Vercel. They have access to some data about the traffic and its performance. We also use or will use Google Analytics and possibly the Facebook Pixel to monitor how many people visit the site. We have access to personal data only in aggregated and anonymized form. We may store contact data submitted via a form only if the person sending it ticks that they agree. `,

      `1. Introduction`,
      `
    We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use and protect your personal data, including the use of cookies.`,
      `2. Controller`,
      `
    The operator responsible for the collection, use and protection of your personal data is Koddezign.`,
      `3. Purpose of data collection`,
      `
    We collect your personal data in order to be able to send emails or contact people who have shown their interest. We only collect personal data that is necessary for this purpose.`,
      `4. The legal basis for processing`,
      `
    The legal basis for processing your personal data is your consent`,
      `5. Data retention`,
      `
      Your personal data will be kept for a period of up to 2 years.`,
      `6. data security`,
      `
    Only members of the organization and official data processors have access to your personal data. We have implemented appropriate measures to protect your personal data from unauthorized access, use or disclosure.`,
      `7. Data sharing`,
      `
    We may share your personal data with third parties for analysis purposes, such as Google, Facebook and Vercel (our hosting provider) for performance reports.`,
      `8. Cookies`,
      `
    We use cookies to improve your browsing experience and to personalize the content and ads we show you. We have a cookie banner on our website that allows you to control the types of cookies you accept. You can choose to accept essential cookies, preference cookies, analysis cookies and advertising cookies. If you choose not to accept any cookies, some features of our website may not function properly.`,
      `9. Responsible for data protection`,
      `If you have any questions or concerns about this privacy policy or our data protection practices, please contact us at contact@koddezign.com`,
    ],
  },
};

export type PrivacyProps = {
  showPrivacy: boolean;
  setShowPrivacy: Dispatch<SetStateAction<boolean>>;
};

export default function Gdpr() {
  const { showPrivacy, setShowPrivacy }: PrivacyProps =
    useContext(PrivacyContext);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [cookiePref, setCookiePref] = useState(false);
  const [cookieAnalytics, setCookieAnalytics] = useState(false);
  const [cookieAds, setCookieAds] = useState(false);

  function handleClose() {
    setShowBanner(false);
    setShowPreferences(false);
    setShowPrivacy(false);
  }

  function openPrefs() {
    setShowBanner(false);
    setShowPreferences(true);
    setShowPrivacy(false);
  }

  function openPrivacy() {
    setShowBanner(false);
    setShowPreferences(false);
    setShowPrivacy(true);
  }

  function handleAcceptAll() {
    setCookiePref(true);
    setCookieAnalytics(true);
    setCookieAds(true);
    setCookie("kdzConsentChoice", "acceptAll", { maxAge: 120960000 });
    handleClose();
  }

  function handleRefuseAll() {
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    setCookiePref(false);
    setCookieAnalytics(false);
    setCookieAds(false);
    setCookie("kdzConsentChoice", "essential", { maxAge: 120960000 });
    handleClose();
  }

  function handleSave() {
    let val: Array<string> = [];

    if (cookiePref) val.push("pref");
    if (cookieAnalytics) val.push("analytics");
    if (cookieAds) val.push("ads");
    const data = val.length
      ? val.length > 2
        ? "acceptAll"
        : val.join(".")
      : "essential";

    setCookie("kdzConsentChoice", data, { maxAge: 120960000 });

    handleClose();
  }

  useEffect(() => {
    if (hasCookie("kdzConsentChoice")) {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    let val = [""];
    const cookieData = getCookie("kdzConsentChoice");

    if (typeof cookieData == "string") val = cookieData.split(".");

    if (val.includes("pref")) setCookiePref(true);
    if (val.includes("analytics")) setCookieAnalytics(true);
    if (val.includes("ads")) setCookieAds(true);
    if (val.includes("acceptAll")) {
      setCookiePref(true);
      setCookieAnalytics(true);
      setCookieAds(true);
    }
  }, []);

  return (
    <div
      className={
        showPreferences || showPrivacy
          ? `${styles.container} ${styles.containerOpened}`
          : styles.container
      }
      style={{ zIndex: "98" }}
    >
      <div
        className={styles.prefButton}
        aria-describedby={"Preferinţe şi politica de confidenţialitate"}
        onClick={() => openPrefs()}
        id="prefsHover"
      >
        🍪
        <div
          className={`absolute bg-[#fff] text-dark rounded-md drop-shadow-xl p-3 bottom-[2rem] left-[20%]  text-lg`}
        >
          {staticData.banner.btnPrefs}
        </div>
      </div>
      {showPreferences || showPrivacy ? (
        <div className={styles.close} onClick={() => handleClose()} />
      ) : (
        <></>
      )}
      {showBanner ? (
        <div className={styles.bannerContainer}>
          <p className="text-2xl ">🍪{staticData.banner.title}</p>
          <p>{staticData.banner.desc}</p>
          <div className="mb-5 flex flex-col">
            <span>
              {staticData.preferences.seeMore}{" "}
              <button
                className="cursor-pointer hover:text-pink transition-colors"
                onClick={() => openPrivacy()}
              >
                {staticData.banner.btnPrivacy}
              </button>
            </span>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={` bg-white flex items-center gap-2 text-black px-3 py-2 mr-auto`}
              onClick={() => openPrefs()}
            >
              {<AiOutlineSetting />}
              {staticData.banner.btnPrefs}
            </button>

            <button
              className={` bg-white flex items-center gap-2 text-black px-3 py-2`}
              onClick={() => handleRefuseAll()}
            >
              {<RxCrossCircled />}
              {staticData.banner.btnRefuse}
            </button>

            <button className={`btnPrimary`} onClick={() => handleAcceptAll()}>
              {<AiOutlineCheckCircle />}
              {staticData.banner.btnAccetp}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      {showPreferences ? (
        <div className={styles.prefsContainer}>
          <p className="text-2xl lg:text-4xl">{staticData.preferences.title}</p>
          <p>{staticData.preferences.desc}</p>

          <div className="mb-5 flex flex-col">
            <span className="flex gap-1">
              {staticData.preferences.seeMore}{" "}
              <button
                className={`flex mb-5 text-[#ff5500]`}
                onClick={() => openPrivacy()}
              >
                {staticData.banner.btnPrivacy}
              </button>
            </span>
          </div>

          <div
            className="checkboxes flex flex-col gap-1"
            id="cookieCheckboxContainer"
          >
            <Checkbox
              text={staticData.preferences.essentialTitle}
              checked={true}
              disabled={true}
            />

            <p className="mb-5">{staticData.preferences.essentialDesc}</p>

            <Checkbox
              text={staticData.preferences.prefsTitle}
              checked={cookiePref}
              onChange={() => setCookiePref(!cookiePref)}
            />

            <p className="mb-5">{staticData.preferences.prefDesc}</p>

            <Checkbox
              text={staticData.preferences.analyticsTitle}
              checked={cookieAnalytics}
              onChange={() => setCookieAnalytics(!cookieAnalytics)}
            />

            <p className="mb-5">{staticData.preferences.analyticsDesc}</p>

            <Checkbox
              text={staticData.preferences.adsTitle}
              checked={cookieAds}
              onChange={() => setCookieAds(!cookieAds)}
            />

            <p className="mb-5">{staticData.preferences.adsDesc}</p>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.buttonContainer2}>
              <button
                className={`flex items-center gap-2`}
                onClick={() => handleRefuseAll()}
              >
                {<RxCrossCircled />} {staticData.banner.btnRefuse}
              </button>

              <button
                className={`btnPrimary`}
                onClick={() => handleAcceptAll()}
              >
                {<AiOutlineCheckCircle />}
                {staticData.banner.btnAccetp}
              </button>
            </div>

            <button
              className={`flex items-center gap-2 bg-black shadow-md shadow-black/20 hover:shadow-lg hover:scale-[1.03] text-white rounded-md px-3 py-2 transition hover:bg-gray-800`}
              onClick={() => handleSave()}
            >
              {<AiOutlineSave />}
              {staticData.preferences.save}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      {showPrivacy ? (
        <div className={`${styles.prefsContainer}`}>
          <p className="text-2xl ">{staticData.banner.btnPrivacy}</p>

          <div className="mb-3">
            <div className={styles.secondaryButton} onClick={() => openPrefs()}>
              {staticData.banner.btnPrefs}
            </div>
          </div>

          <ul>
            {staticData.privacy.body.map((e: string, i: number) => (
              <li className={/\d/.test(e[0]) ? "text-xl mb-1" : "mb-5"} key={i}>
                {e}
              </li>
            ))}
          </ul>

          <button className={`btnPrimary`} onClick={() => openPrefs()}>
            {staticData.banner.btnPrefs}
          </button>
        </div>
      ) : (
        <></>
      )}

      <style jsx>{`
        #prefsHover > div {
          transition: transform 0.2s;
          transform-origin: bottom left;
          transform: scale(0);
        }

        #prefsHover:hover > div {
          transform: scale(1);
        }
        #cookieCheckboxContainer {
          padding-bottom: 1rem;
          margin-top: -1rem;
        }
        #cookieCheckboxContainer > label {
          display: flex;
          gap: 0.25rem;
          cursor: pointer;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
