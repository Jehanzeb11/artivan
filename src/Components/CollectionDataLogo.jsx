import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import demandThrive from "../assets/demand-thrive.png";
import gorilla from "../assets/gorilla-rage.png";
import river from "../assets/river-town.png";
import media from "../assets/media-tune.png";
import mcb from "../assets/mcb.webp";
import barber from "../assets/barber.webp";
import papachJone from "../assets/papachjone.webp";
import supreme from "../assets/supreme.webp";

const CollectionData = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
<Image src={demandThrive} alt="Python" className='object-contain mx-auto w-full'/>
</div>

<div className='px-2'>
<Image src={river} alt="Python" className='mx-auto w-full object-contain'/>
</div>

<div className='px-2'>
<Image src={gorilla} alt="Python" className='mx-auto w-full object-contain'/>
</div>

<div className='px-2'>
<Image src={media} alt="Python" className='object-contain mx-auto w-full'/>
</div>

<div className='px-2'>
<Image src={mcb} alt="Python" className='object-contain mx-auto w-full'/>
</div>

<div className='px-2'>
<Image src={supreme} alt="Python" className='mx-auto w-full object-contain'/>
</div>

<div className='px-2'>
<Image src={barber} alt="Python" className='mx-auto w-full object-contain'/>
</div>

<div className='px-2'>
<Image src={papachJone} alt="Python" className='object-contain mx-auto w-full'/>
</div>

         </Slider>
    </div>
  )
}

export default CollectionData
