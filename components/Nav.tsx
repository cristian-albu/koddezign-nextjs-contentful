import Link from "next/link";
import { navData as data, NavItem } from "@/data/staticData";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <div className="relative z-[99]">
      <button
        className={`fixed top-0 left-0 w-[100vw] h-[100vh] md:w-0 md:h-0  ${
          burgerMenu ? "scale-1" : "scale-0"
        }`}
        onClick={() => setBurgerMenu(false)}
        aria-label="Close the menu on click or tap"
      >
        <div
          className={`w-full h-full transition delay-50 ${
            burgerMenu
              ? "backdrop-blur-sm md:backdrop-blur-0"
              : "md:backdrop-blur-0"
          }  bg-white/60`}
        />
      </button>

      <div className="fixed top-0 left-0 z-[99] w-full  border-b-[1px] border-b-gray-300 flex items-center bg-white/40 text-black backdrop-blur-md">
        <div className="flex justify-between items-center w-full">
          <div
            key={data[0].link}
            className={` flex items-center justify-center mr-auto`}
            onClick={() => setBurgerMenu(false)}
          >
            <Link
              href={data[0].link}
              className="flex items-center justify-center px-4 py-3 hover:bg-[#ff5500] hover:text-white transition  gap-2"
            >
              {data[0].icon}
              {data[0].title}
            </Link>
          </div>
          <button
            className="flex md:hidden items-center justify-center cursor-pointer p-4 hover:bg-[#ff5500] transition"
            onClick={() => setBurgerMenu((burgerMenu) => !burgerMenu)}
            aria-label="Open and close the menu"
          >
            <RxHamburgerMenu />
          </button>

          <div
            className={`${
              burgerMenu ? "scale-[1] " : "scale-0 md:scale-[1] "
            } flex flex-col w-[50%] md:w-auto   md:flex-row items-start justify-start  md:items-center  
        absolute top-[3rem] right-0 md:top-0 md:relative rounded-bl-md md:rounded-bl-none 
        shadow-black/20 shadow-xl md:shadow-none transition origin-top-right z-[99] bg-white/75  md:bg-white/0 `}
          >
            {data.map(
              (item: NavItem, index: number) =>
                index > 0 && (
                  <div
                    key={item.link}
                    className={`w-full md:w-auto flex items-start justify-start `}
                    onClick={() => setBurgerMenu(false)}
                  >
                    <Link
                      href={item.link}
                      className="w-full flex items-center justify-start px-4 py-3 hover:bg-[#ff5500] hover:text-white transition  gap-2"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
