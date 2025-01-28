import React from "react";
import Logo from "../../assets/logo.png";
import { FaCaretDown, FaSearch } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/toprated",
  },
  {
    id: 3,
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Top",
    link: "/#",
  },

  {
    id: 2,
    name: "Bottoms",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div>
      {/* upper navbar */}
      <div className="bg-primary py-3 sm:py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-32 uppercase invert" />
            </a>
          </div>
          {/* search bar */}
          <div>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px sm:w-[200px] rounded-full border bordergray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <FaSearch className="text-white-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4">
                {data.name}
              </a>
            </li>
          ))}
          {/*dropdown*/}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div
              className="absolute z-[9999] hidden
            group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md"
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
