"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdAlignHorizontalLeft } from "react-icons/md";

export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
    <nav className="dark:bg-black  bg-white ">
      <di className="relative w-full lg:w-4/5 md:w-11/12 mx-auto flex justify-between items-center p-4 md:p-5 lg:p-5 h-14 md:h-16 lg:h-20">
        <div className="z-20">
          <Link
            href={"#"}
            className="dark:text-white text-base md:text-lg lg:text-2xl z-20">
            NavLogo
          </Link>
        </div>
        <div className="lg:flex hidden items-center gap-9">
          <Link
            href={"#"}
            className="text-base dark:text-white dark:hover:text-gray-400 hover:text-gray-700 md:text-lg lg:text-xl">
            Home
          </Link>
          <Link
            href={"#"}
            className="text-base dark:text-white dark:hover:text-gray-400 hover:text-gray-700 md:text-lg lg:text-xl">
            About
          </Link>
          <Link
            href={"#"}
            className="text-base dark:text-white dark:hover:text-gray-400 hover:text-gray-700 md:text-lg lg:text-xl">
            Contact
          </Link>
          <Link
            href={"#"}
            className="text-base dark:text-white dark:hover:text-gray-400 hover:text-gray-700 md:text-lg lg:text-xl">
            Service
          </Link>
        </div>
        <div
          onClick={toggleMenu}
          className="block lg:hidden dark:text-white dark:hover:text-gray-400 hover:text-gray-700 z-20">
          <MdAlignHorizontalLeft />
        </div>
        {isOpen ? (
          <div className="absolute top-0 h-screen right-0 left-0 bg-black lg:hidden flex flex-col justify-center items-center gap-9">
            <Link onClick={toggleMenu}
              href={"#"}
              className="text-base dark:text-white dark:hover:text-gray-400 hover:text-gray-700 md:text-lg lg:text-xl">
              Home
            </Link>
            <Link onClick={toggleMenu}
              href={"#"}
              className="text-base dark:text-white dark:hover:text-gray-400 hover:text-gray-700 md:text-lg lg:text-xl">
              About
            </Link>
            <Link onClick={toggleMenu}
              href={"#"}
              className="text-base dark:text-white dark:hover:text-gray-400 hover:text-gray-700 md:text-lg lg:text-xl">
              Contact
            </Link>
            <Link onClick={toggleMenu}
              href={"#"}
              className="text-base dark:text-white dark:hover:text-gray-400 hover:text-gray-700 md:text-lg lg:text-xl">
              Service
            </Link>
          </div>
        ) : (
          ""
        )}
      </di>
      </nav>
    </>
  );
};
