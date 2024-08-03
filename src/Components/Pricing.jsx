"use client";
import React, { useState } from "react";
import LogoDesignPrices from "./LogoDesignPrices";
import BrandingPrices from "./BrandingPrices";
import WebsitePrices from "./WebsitePrices";
import LogoBrandingPrices from "./logoBrandingPrices";
import VideoPrices from "./VideoPrices";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      tabName: "Logo Design",
      tabData: "logo",
    },
    {
      tabName: "Branding",
      tabData: "logo",
    },
    {
      tabName: "Website Design",
      tabData: "logo",
    },
    {
      tabName: "Logo + Branding",
      tabData: "logo",
    },
    {
      tabName: "Video Animation",
      tabData: "logo",
    },
  ];

  return (
    <div className="flex justify-center px-4 py-16 items-center">
      <div className="container xl:w-[90%] w-full">
        <h1 className="lg:text-6xl font-bold text-gray-900 sm:text-4xl text-3xl text-center">
          Discover Our <span className="text-primary">Competitive</span> Rates
        </h1>
        <p className="text-center text-gray-700 lg:my-8 my-3 md:px-8 max-sm:text-sm">
          Explore our transparent pricing model designed to offer competitive
          rates tailored to meet your needs. We believe in clarity and fairness,
          ensuring you have full visibility into our pricing structure for a
          seamless experience.
        </p>

        <div className="flex justify-center items-center flex-wrap py-2 w-full">
          {tabs.map((tab, index) => (
            <div className="m-2 w-lg" key={index}>
              <button
                className={` lg:text-base text-sm font-medium ${
                  index === activeTab ? "btn " : "btnNonActive"
                }`}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {tab.tabName}
              </button>
            </div>
          ))}
        </div>

        {activeTab === 0 ? <LogoDesignPrices /> : activeTab === 1 ? <BrandingPrices />: activeTab === 2 ? <WebsitePrices />: activeTab === 3 ? <LogoBrandingPrices /> : activeTab === 4 ? <VideoPrices /> : null}
      </div>
    </div>
  );
};

export default Pricing;
