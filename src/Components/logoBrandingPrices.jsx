import React from "react";
import { FaCheck } from "react-icons/fa";

const LogoBrandingPrices = () => {
  const cards = [
    {
      id: 1,
      name: "Basic",
      price: 89,
      list: [
        "Basic Logo",
        "2 Logo Concepts",
        "3 Revisions",
        "No High Res. files",
        "48 hours Delivery",
        "100% Ownership",
        "JPG + PNG",
        "Startup Branding",
        "Business Card Design",
        "Letterhead Design",
        "Envelope Design",
        "100% Ownership",
      ],
    },

    {
      id: 2,
      name: "Standard",
      price: 219,
      list: [
        "Professional Logo",
        "4 Logo Concepts",
        "6 Revisions",
        "Custom Logo",
        "Vector PDF File",
        "48 hours Delivery",
        "JPG + PDF + PNG",
        "100% Ownership",
        "Corporate Branding",
        "Business Card Design",
        "Letterhead Design",
        "Envelope Design",
        "Email Signature",
        "2 Social Covers",
        "T-Shirt Design",
        "Web Banner Design",
      ],
    },

    {
      id: 3,
      name: "Prime",
      price: 249,
      list: [
        "Premium Logo",
        "6 Logo Concepts",
        "Unlimited Revision",
        "Custom Logo",
        "Vector EPS,PDF file",
        "24-48 H Delivery",
        "JPG + PDF + PNG + EPS",
        "100% Ownership",
        "Ultimate Branding",
        "Business Card Design",
        "Letterhead Design",
        "Envelope Design",
        "Email Signature",
        "2 Social Covers",
        "T-Shirt Design",
        "Web Banner Design",
        "Signage Design,",
        "Car Stickers Design",
      ],
    },

    {
      id: 4,
      name: "Deluxe",
      price: 599,
      list: [
        "Deluxe Logo",
        "Unlimited Logo Concepts",
        "Unlimited Revision",
        "Custom Logo",
        "Editable Vector Ai",
        "PDF file",
        "24-48 H Delivery",
        "JPG + PDF + PNG + EPS + AI",
        "100% Ownership",
        "Business Card Design",
        "Ultimate Branding",
        "Business Card Design",
        "Letterhead Design",
        "Envelope Design",
        "Email Signature",
        "4 Social Covers",
        "T-Shirt Design",
        "Web Banner Design",
        "Signage Design",
        "Car Stickers Design",
      ],
    },
  ];

  return (
    <div className="w-full grid grid-cols-12 mt-6 gap-6 justify-items-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="lg:col-span-3 sm:col-span-6 col-span-12 rounded-lg border-[1px] border-gray-300 w-full"
        >
          <h4 className="font-bold text-3xl py-4 px-2 text-center rounded-t-lg bg-my-gradient text-white">
            {card.name}
          </h4>

          <h4 className="text-center font-bold text-3xl my-3">${card.price}</h4>

          <ul className="flex flex-col gap-4 p-3 overflow-y-scroll h-60 w-full">
            {card.list.map((list) => (
              <li
                key={list}
                className="flex items-center gap-2 text-gray-700 w-full text-sm"
              >
                <span>
                  {" "}
                  <FaCheck size={20} className="text-green-600" />
                </span>
                {list}
              </li>
            ))}
          </ul>
          <div className="flex justify-center my-3">
            <button className="btn">Order Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoBrandingPrices;
