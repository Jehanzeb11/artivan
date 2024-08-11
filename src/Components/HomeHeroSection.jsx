import React from "react";
import Image from "next/image";
import heroImage from "../assets/homeHero.png";
import { GoArrowUpRight } from "react-icons/go";

const HomeHeroSection = () => {
  return (
    <div className="w-full bgHero sm:h-screen max-h-screen">
      <div className="bg-white/80 h-full flex justify-center items-end w-full px-4 max-lg:pb-6">
        <div className="container lg:w-[90%] text-gray-900 w-full flex lg:px-4 lg:gap-4 gap-0 max-md:flex-col-reverse sm:justify-between items-center mt-12">
          <div data-aos="fade-up" data-aos-delay="50">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl sm:leading-10 font-bold">
              Creating <span className="text-primary">Superior</span>
            </h1>
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl sm:leading-10 md:mt-4 mt-2 font-bold">
              Digital Experience
            </h1>

            <p className="my-4 text-lg text-gray-700">
              Custom Websites, Branding & Digital Marketing Solutions
            </p>

            <div className="flex gap-6 items-center">
              <button className="btn">Get A Quote</button>
              <button className="border-b-[2px] transition-all duration-200 ease-in-out border-transparent hover:border-gray-800 flex gap-1 items-center font-medium">
                Contact Us <GoArrowUpRight />
              </button>
            </div>
          </div>

          <div className="fadeIn-animation">
            <Image
              src={heroImage}
              alt="hero"
              width={1000}
              height={1000}
              className="md:h-[44rem] max-sm:h-80 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
