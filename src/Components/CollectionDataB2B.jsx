"use client";
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import chart1 from "../assets/chart1.webp";
import chart2 from "../assets/chart2.webp";
import chart3 from "../assets/chart3.webp";
import chart4 from "../assets/chart4.webp";
import chart5 from "../assets/chart5.webp";
import chart6 from "../assets/chart6.webp";

const CollectionDataB2B = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
        
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        
      },
     
    ],
  };

  return (
    <div className='w-full collectionSlider lg:py-16 py-8'>
         <Slider {...settings}>

<div className='px-2'>
<Image src={chart1} alt="Python" className='object-contain '/>
</div>

<div className='px-2'>
<Image src={chart2} alt="Python" className='h-full mt-1  object-contain'/>
</div>

<div className='px-2'>
<Image src={chart3} alt="Python" className='h-full  object-contain'/>
</div>

<div className='px-2'>
<Image src={chart4} alt="Python" className='object-contain '/>
</div>

<div className='px-2'>
<Image src={chart5} alt="Python" className='object-contain '/>
</div>

<div className='px-2'>
<Image src={chart6} alt="Python" className='h-full object-contain'/>
</div>

         </Slider>
    </div>
  )
}

export default CollectionDataB2B
