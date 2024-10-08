"use client";
import React from "react";
import Slider from "react-slick";

const HomeServiceSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-my-gradient uppercase w-full text-white text-center lg:text-3xl sm:text-2xl text-xl px-4 py-6 font-bold">
      <Slider {...settings}>
        <div>
          <h3>BRANDING</h3>
        </div>
        <div>
          <h3>advertising</h3>
        </div>
        <div>
          <h3>ui/Ux</h3>
        </div>
        <div>
          <h3>WEBSITES</h3>
        </div>
        <div>
          <h3>mobile APPS</h3>
        </div>
      </Slider>
    </div>
  );
};

export default HomeServiceSlider;
