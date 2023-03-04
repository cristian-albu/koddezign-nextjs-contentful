import Link from "next/link";
import { navData as data, NavItem } from "@/data/staticData";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 z-[99] w-full  border-b-[1px] border-b-gray-300 flex items-center bg-white/40 text-black backdrop-blur-sm">
      <ul className="flex justify-between items-center w-full">
        {data.map((item: NavItem, index: number) => (
          <li
            key={item.link}
            className={`${
              index == 0 && "mr-auto"
            } flex items-center justify-center`}
          >
            <Link
              href={item.link}
              className="flex items-center justify-center px-3 py-2 hover:bg-[#ff5500] hover:text-white transition text-sm gap-2"
            >
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Nav;
