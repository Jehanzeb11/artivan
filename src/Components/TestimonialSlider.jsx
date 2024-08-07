"use client";
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick/lib/slider';
import testimonial1 from "../assets/testimonial-1.png";
import star from "../assets/star.png";
import prevBtn from "../assets/prev-btn.png";
import nextBtn from "../assets/next-btn.png";
import quoteT from "../assets/quote-t.png";
import quoteB from "../assets/quote-b.png";

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} slide-btn`}
      onClick={onClick}
    >
      <Image src={nextBtn} width={1000} height={1000} alt="next-btn" className="" />
    </button>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} slide-btn`}
      onClick={onClick}
    >
      <Image src={prevBtn} width={1000} height={1000} alt="prev-btn" className="" />
    </button>
  );
};

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

    ],
  };

  return (
    <div className="flex justify-center items-center">
    <div className='lg:w-[80%] w-full'>
      <Slider {...settings}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 flex justify-center items-center md:max-w-[25rem] sm:max-w-[20rem] max-w-[18rem]">
            <div className="rounded-xl border-[1px] border-gray-300 md:p-6 p-4 shadow-lg w-full">
              <div className="p-3 relative">
                <Image src={quoteT} width={1000} height={1000} alt="STAR" className="sm:w-4 w-3 object-contain absolute top-0 left-0" />
                <p className="text-gray-700 text-center  max-sm:text-xs">
                  Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.
                </p>
                <Image src={quoteB} width={1000} height={1000} alt="STAR" className="sm:w-4 w-3 object-contain absolute bottom-0 right-0" />
              </div>
              <div className="flex justify-center items-center w-full flex-col">
                <Image src={testimonial1} width={1000} height={1000} className="sm:w-24 w-16 mt-6 mb-4 rounded-full object-contain" alt="" />
                <div className="flex gap-1 justify-center items-center mb-4">
                  {Array(5).fill(0).map((_, j) => (
                    <Image key={j} src={star} width={1000} height={1000} alt="STAR" className="md:w-5 w-4" />
                  ))}
                </div>
                <h4 className="font-bold sm:text-xl text-base text-[#57007B]">Imran Khan</h4>
                <p className="font-medium sm:text-base text-sm text-gray-700">Software Engineer</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>

  );
};

export default TestimonialSlider;
