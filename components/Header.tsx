"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import hero from "assets/hero.png";
import Headline from "./Headline";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import NavButton from "./NavButton";

const Header = () => {
  const Links = [
    { name: "Main", link: "/" },
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Shop", link: "/shop" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Image
        src={hero}
        className={` w-full h-96 lg:h-[400px] -z-20`}
        alt="Chamba Valley Tomatoes"
      />
      <div className="absolute top-0 left-0 w-full">
        <div
          className={`md:flex-row md:justify-between md:p-5  md:items-center flex flex-col ${
            isOpen ? "bg-white bg-opacity-50 md:bg-opacity-0" : ""
          }`}
        >
          <Logo />
          {/* Navbar */}
          <div>
            <div className="text-3xl absolute top-4 right-8 cursor-pointer md:hidden transition-all duration-200 ease-in-out">
              {isOpen ? (
                <FaTimes onClick={toggleMenu} /> // Close icon
              ) : (
                <FaBars onClick={toggleMenu} /> // Hamburger menu icon
              )}
            </div>
            <ul
              className={`md:flex space-x-5 md:items-center text-m md:text-xs font-semibold w-full  py-3 pl-7 md:pl-0 uppercase md:py-0 transition-all duration-200 ease-in-out ${
                !isOpen ? "hidden" : "top-0"
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className={`md:my-0 my-3 hover:underline hover:decoration-4 hover:decoration-[#DC0D0D] hover:underline-offset-4 ${
                    link.name === "Main" ? "hidden" : ""
                  }`}
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}

              <li className="md:my-0 my-1">
                <NavButton>Contact</NavButton>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${isOpen ? "hidden" : ""} mt-10`}>
          <Headline />
        </div>
      </div>
    </div>
  );
};

export default Header;
