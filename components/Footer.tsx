import React, { useContext } from "react";
import { navData, NavItem, staticFooterData as data } from "@/data/staticData";
import Section from "./Section";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { PrivacyProps } from "./Gdpr";
import { MdOutlinePolicy } from "react-icons/md";
import { PrivacyContext } from "@/context/privacyContext";

const Footer = () => {
  const { showPrivacy, setShowPrivacy }: PrivacyProps =
    useContext(PrivacyContext);
  return (
    <Section bg={"black"}>
      <Wrapper>
        <div className="flex justify-between flex-wrap w-full">
          <div className="flex flex-col w-full md:w-1/3 my-5">
            <p className="text-xl mb-5">Koddezign</p>
            <p className="text-xl my-5">Contact data</p>
            <ul className="flex flex-col justify-start items-start gap-3">
              <li>
                <a
                  href="mailto: contact@koddezign.com"
                  className="hover:text-[#ff5500] transition underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email: contact@koddezign.com
                </a>
              </li>
            </ul>{" "}
            <ul className="flex flex-col justify-start items-start gap-3 text-xs pr-5 my-5 text-gray-400">
              <li>Business name: KODDZIGN S.R.L.</li>
              <li>Business ID (CIF): 43722863</li>
              <li>Registered (Reg. Com.): J22/526/2021</li>
              <li>
                Social headquarters: Romania, Iasi County, Miroslava, Street.
                Radu Mihnea Voda, no. 6
              </li>
              <li>IBAN: RO90INGB0000999911121893 - ING Bank</li>
            </ul>
          </div>
          <div className="flex flex-col w-full md:w-1/3 my-5">
            <p className="text-xl mb-5">Quick links</p>
            <div className="flex flex-col justify-start items-start gap-3">
              {navData.map(
                (item: NavItem, index: number) =>
                  index > 0 && (
                    <Link
                      href={item.link}
                      key={item.link}
                      className="flex items-center gap-3"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  )
              )}
              <div>
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="flex items-center gap-3"
                >
                  <MdOutlinePolicy />
                  Privacy policy
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/3 my-5">
            <p className="text-xl mb-5">Social media</p>
            <div className="flex flex-col justify-start items-start gap-3">
              <a
                href="https://www.facebook.com/koddezign.marketing"
                className="hover:text-[#ff5500] transition underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/koddezign/"
                className="hover:text-[#ff5500] transition underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/koddezign"
                className="hover:text-[#ff5500] transition underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Footer;
