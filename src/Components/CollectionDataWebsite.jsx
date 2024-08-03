import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import web1 from "../assets/web1.webp";
import web2 from "../assets/web2.webp";
import web3 from "../assets/web3.webp";
import web4 from "../assets/web4.webp";
import web5 from "../assets/web5.webp";
import web6 from "../assets/web6.webp";
import web7 from "../assets/web7.webp";
import web8 from "../assets/web8.webp";
import web9 from "../assets/web9.webp";
import web10 from "../assets/web10.webp";

const CollectionDataWebsite = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    rows: 2,
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
          rows: 1,
        },
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full collectionSlider lg:py-16 py-8">
      <Slider {...settings}>
        <div className="px-2">
          <Image src={web1} alt="Python" className="object-contain " />
        </div>

        <div className="px-2">
          <Image
            src={web2}
            alt="Python"
            className="h-full mt-1  object-contain"
          />
        </div>

        <div className="px-2">
          <Image src={web3} alt="Python" className="h-full  object-contain" />
        </div>

        <div className="px-2">
          <Image src={web4} alt="Python" className="object-contain " />
        </div>

        <div className="px-2">
          <Image src={web5} alt="Python" className="object-contain " />
        </div>

        <div className="px-2">
          <Image src={web6} alt="Python" className="h-full object-contain" />
        </div>

        <div className="px-2">
          <Image src={web7} alt="Python" className="h-full object-contain" />
        </div>

        <div className="px-2">
          <Image src={web8} alt="Python" className="h-full object-contain" />
        </div>

        <div className="px-2">
          <Image src={web9} alt="Python" className="h-full object-contain" />
        </div>
        <div className="px-2">
          <Image src={web10} alt="Python" className="h-full object-contain" />
        </div>
      </Slider>
    </div>
  );
};

export default CollectionDataWebsite;
