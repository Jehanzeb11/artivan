import React from "react";
import { FaCheckCircle  } from "react-icons/fa";

const WebsitePrices = () => {
  const cards = [
    {
      id: 1,
      name: "Basic",
      price: 499,
      list: [
        "5 Pages Website",
        "Custom Layout Design",
        "3 Banner Designs",
        "5 Stock Photos",
        "Free Favicon Design",
        "Free Google Sitemap",
        "Unlimited Revisions",
        "Cross-Browser Compatibility",
      ],
    },

    {
      id: 2,
      name: "Standard",
      price: 799,
      list: [
        "Up to 10 Unique Pages Website/ CMS / Admin Panel Integration",
        "5+ Stock Photos & Banner Designs",
        "Free Social Media Integration",
        "Free Favicon Design",
        "Free Google Sitemap",
        "Unlimited Revisions",
        "Cross-Browser Compatibility",
      ],
    },

    {
      id: 3,
      name: "E-Commerce",
      price: 999,
      list: [
        "Custom Ecommerce Website Up to 50 Products",
        "CMS/ Admin Panel Integration Full Mobile Responsive",
        "Shopping Cart Integration",
        "Payment Gateway Integration",
        "Product Listing & Management",
        "Order Management & Tracking",
      ],
    },

    {
      id: 4,
      name: "Corporate",
      price: 599,
      list: [
        "Up to 15 Unique Pages Website Custom Made, Interactive & Dynamic Design",
        "Customized WordPress or PHP Development",
        "Full Mobile Responsive",
        "Interactive Sliding Banners Up to 10",
        "Custom Made Banners",
        "Upto 15 Professional Emails",
        "Complete Source Files",
        "Complete Deployment"
      ],
    },
  ];

  return (
    <div className="w-full grid grid-cols-12 mt-6 lg:gap-10 gap-4 justify-items-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="lg:col-span-3 sm:col-span-6 col-span-12 rounded-lg border-[1px] border-gray-300 w-full"
        >
          <h4 className="font-bold text-3xl py-4 px-2 text-center rounded-t-lg bg-my-gradient text-white">
            {card.name}
          </h4>

          <h4 className="text-center font-bold text-3xl my-3">${card.price}</h4>

          <ul className="flex flex-col priceList gap-3 py-3 px-8 overflow-y-scroll sm:h-80 h-60 w-full">
            {card.list.map((list) => (
              <li
                key={list}
                className="flex items-center gap-2 text-gray-700 w-full sm:text-lg text-base"
              >
                <span>
                  {" "}
                  <FaCheckCircle  size={20} className="text-[#8EC63F]" />
                </span>
                {list}
              </li>
            ))}
          </ul>
          <div className="flex justify-center my-3">
            <button className="btn text-lg">Order Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebsitePrices;
