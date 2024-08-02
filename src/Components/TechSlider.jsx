"use client";
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick"; 
import python from "@/assets/python.png";
import html from "@/assets/html.png";
import shopify from "@/assets/shopify.png";
import laravel from "@/assets/laravel.png";
import photoshop from "@/assets/photoshop.png";
import illustrator from "@/assets/illustrator.png";

const TechSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
    <div className='w-full py-6 px-4 bg-[#E7DAED]'>
       <Slider {...settings}>
        <div className='techSlideData'>
      <Image src={python} width={1000} height={1000} alt="tech" className='w-16' />
        </div>
      
        <div className='techSlideData'>
      <Image src={html} width={1000} height={1000} alt="tech" className='w-16' />
        </div>

        <div className='techSlideData'>
      <Image src={shopify} width={1000} height={1000} alt="tech" className='w-16' />
        </div>

        <div className='techSlideData'>
      <Image src={laravel} width={1000} height={1000} alt="tech" className='w-16' />
        </div>

        <div className='techSlideData'>
      <Image src={photoshop} width={1000} height={1000} alt="tech" className='w-16' />
        </div>
        
        <div className='techSlideData'>
      <Image src={illustrator} width={1000} height={1000} alt="tech" className='w-16' />
        </div>

      </Slider>
    </div>
  )
}

export default TechSlider
