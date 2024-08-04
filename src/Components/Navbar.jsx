"use client";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import logo from "../assets/logo.webp";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Update state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  return (
    <div>
      <header className={`${isScrolled ? "bg-[#3030304c]" : "bg-transparent"} transition-colors duration-300 ease-in-out w-full fixed z-30 top-0 py-3 px-4 flex justify-center items-center`}>
        <nav className="container flex justify-between gap-3 text-base lg:w-[90%]">
          <Image
            src={logo}
            alt="logo"
            width={1000}
            height={1000}
            className="cursor-pointer lg:w-52 md:w-48 w-40 object-contain"
          />

          <ul className="lg:flex lg:gap-8 gap-4 font-medium justify-center items-center text-gray-800 hidden xl:text-xl text-lg">
            <li className="hover:text-primary transition-colors duration-200 ease-in-out cursor-pointer">
              Home
            </li>
            <li className="hover:text-primary transition-colors duration-200 ease-in-out cursor-pointer">
              About
            </li>
            <li className="flex gap-1 items-end hover:text-primary transition-colors duration-200 ease-in-out cursor-pointer">
              Services <IoIosArrowDown />
            </li>
            <li className="hover:text-primary transition-colors duration-200 ease-in-out cursor-pointer">
              Our Packages
            </li>
            <li className="hover:text-primary transition-colors duration-200 ease-in-out cursor-pointer">
              Contact
            </li>
          </ul>

          <button className="btn lg:block hidden">Hire Us Now</button>

          <button className="lg:hidden block" onClick={() => setShow(true)}>
            <RiMenu3Fill color="#059CC5" size={28} />
          </button>
        </nav>
      </header>

      {show && (
        <div className="fixed z-50">
          <div
            className="fixed z-40 bg-gray-950 top-0 left-0 w-full h-screen opacity-35"
            onClick={handleClose}
          ></div>
          <div
            className={`fixed z-50 right-0 top-0 ${
              show ? "swipeToLeft" : "swipeToRight"
            } w-3/4 h-screen bg-gray-900 p-3`}
          >
            <div className="flex justify-end">
              <button
                className="lg:hidden block text-primary"
                onClick={handleClose}
              >
                <IoCloseSharp
                  size={30}
                  className={show ? "block" : "hidden"}
                />
              </button>
            </div>
            <div className="overflow-y-scroll h-full">
              <ul className="text-white text-center mt-12 gap-8 text-2xl flex justify-center flex-col items-center font-semibold">
                <li
                  onClick={handleClose}
                  className="hover:text-primary transition-all ease-in-out cursor-pointer duration-500"
                >
                  Home
                </li>
                <li
                  onClick={handleClose}
                  className="hover:text-primary transition-all ease-in-out cursor-pointer duration-500"
                >
                  About
                </li>
                <li
                  onClick={handleClose}
                  className="hover:text-primary flex gap-2 items-end transition-all ease-in-out cursor-pointer duration-500"
                >
                  Services <IoIosArrowDown />
                </li>
                <li
                  onClick={handleClose}
                  className="hover:text-primary transition-all ease-in-out cursor-pointer duration-500"
                >
                  Our Packages
                </li>
                <li
                  onClick={handleClose}
                  className="hover:text-primary transition-all ease-in-out cursor-pointer duration-500"
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
