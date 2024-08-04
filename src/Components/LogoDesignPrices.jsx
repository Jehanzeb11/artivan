import React from "react";
import { FaCheckCircle  } from "react-icons/fa";

const LogoDesignPrices = () => {
  const cards = [
    {
      id: 1,
      name: "Basic",
      price: 50,
      list: [
        "4 Original Logo Concepts",
        "2 Dedicated Logo Designers",
        "4 Revisions",
        "With Grey Scale Format",
        "Email Signature Design",
      ],
    },

    {
      id: 2,
      name: "Standard",
      price: 125,
      list: [
        "12 Original Logo Concepts",
        "4 Dedicated Logo Designers",
        "Unlimited Revisions",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Email Signature Designs",
        "With Grey Scale Format",
      ],
    },

    {
      id: 3,
      name: "Prime",
      price: 299,
      list: [
        "Unlimited Original Logo Concepts 8 Dedicated Logo Designers",
        "Unlimited Revisions",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "500 Business Cards",
        "With Grey Scale Format",
      ],
    },

    {
        id: 4,
        name: "Deluxe",
        price: 599,
        list: [
          "Unlimited Original Logo Concepts 10 Dedicated Logo Designers",
          "Unlimited Revisions",
          "Stationery Design (Business Card, Letterhead, Envelope)",
          "500 Business Cards",
          "With Grey Scale Format",
        ],
      },

  ];

  return (
    <div className="w-full grid grid-cols-12 mt-6 lg:gap-10 gap-4 justify-items-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="lg:col-span-3 sm:col-span-6 col-span-12 rounded-lg border-[1px] border-gray-300 w-full "
        >
          <h4 className="font-bold text-3xl py-4 px-2 text-center rounded-t-lg bg-my-gradient text-white">
            {card.name}
          </h4>

          <h4 className="text-center font-bold text-3xl my-3">${card.price}</h4>

          <ul className="flex flex-col priceList gap-3 py-3 px-8 font-light overflow-y-scroll sm:h-80 h-60 w-full">
            {card.list.map((list) => (
              <li key={list} className="flex items-center gap-2 text-gray-700 w-full sm:text-lg text-base">
               <span> <FaCheckCircle  size={20} className="text-[#8EC63F]" /></span>
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

export default LogoDesignPrices;
