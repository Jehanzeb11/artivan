import React from "react";
import { FaCheck } from "react-icons/fa";

const VideoPrices = () => {
  const cards = [
    {
      id: 1,
      name: "Basic",
      price: 499,
      list: [
        "60 seconds",
        "Custom Layout Design.",
        "Script Writing",
        "Detail Storyboard",
        "Professional Voice over",
        "Impressive Animation",
        "Royalty free BG & SFX",
        "File Delivered in HD 720p",
      ],
    },

    {
      id: 2,
      name: "Startup",
      price: 799,
      list: [
        "60 seconds",
        "Script Writing",
        "Storyboarding",
        "Detail illustrations",
        "Professional Voice over",
        "Impressive Animation",
        "Royalty free BG & SFX",
        "3 weeks Deadline",
      ],
    },

    {
      id: 3,
      name: "Professional",
      price: 599,
      list: [
        "60 seconds",
        "Script Writing",
        "Storyboarding",
        "Detail illustrations",
        "Professional Voice over",
        "Impressive Animation",
        "File Delivered in HD 1080p",
        "MP4, MOV, WAV",
      ],
    },

    {
      id: 4,
      name: "Deluxe",
      price: 999,
      list: [
        "60 seconds",
        "2 Concepts + premium scriptwriting",
        "Storyboarding",
        "Detail illustrations",
        "Impressive Animation",
        "Royalty free BG & SFX",
        "File Delivered in HD 1080p",
        "Unlimited revisions",
        "MP4, MOV, WAV, GIF",
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

export default VideoPrices;
