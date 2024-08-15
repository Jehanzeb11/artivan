"use client";
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import AitamiX2 from"../assets/AitamiX2.jpg";
import Jumper from"../assets/Jumper.jpg";
import charli from"../assets/Charli.png";
import hell from"../assets/hell.jpg";
import denver from"../assets/denver.jpg";
import anim from"../assets/anim.jpg";
import correction from"../assets/Correction.jpg";
import gwen from"../assets/spider-gwen.jpg";
import mouse1 from"../assets/mouse1.jpg";
import mouse2 from"../assets/mouse2.jpg";

const CollectionDataArt = () => {
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
<Image src={AitamiX2} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>
<div className='px-2'>
<Image src={charli} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>
<div className='px-2'>
<Image src={Jumper} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>
<div className='px-2'>
<Image src={hell} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>
<div className='px-2'>
<Image src={denver} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>
<div className='px-2'>
<Image src={anim} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>
<div className='px-2'>
<Image src={correction} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>
<div className='px-2'>
<Image src={gwen} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>
<div className='px-2'>
<Image src={mouse1} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>
<div className='px-2'>
<Image src={mouse2} alt="Python" className='object-cover mx-auto w-full sm:h-96'/>
</div>


         </Slider>
    </div>
  )
}

export default CollectionDataArt
