"use client";
import React, { useState } from "react";

const Collection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabData, setActiveTabDaat] = useState(0);

  const tabs = [
    {
      tabName: "Logo Design",
      tabData: "logo",
    },
    {
      tabName: "art & Illustration",
      tabData: "logo",
    },
    {
      tabName: "B2B & B2C Portal",
      tabData: "logo",
    },
    {
      tabName: "Website",
      tabData: "logo",
    },
    {
      tabName: "Video Animation",
      tabData: "logo",
    },
  ];

  return (
    <div className="flex justify-center items-center py-16 px-4 w-full">
      <div className="container lg:w-[90%] w-full">
        <h1 className="text-6xl font-bold text-center">
          A <span className="text-primary">Collection</span> That Will Win Your
          Heart Over
        </h1>
        <p className="my-5 text-gray-700 text-center">
          Reveal the potency of our logo design services, manifesting the
          fundamental essence of your business idea through our logo and brand
          design services. Our team's specialized expertise in niche markets
          positions us as the top choice in the business area.
        </p>

        <div className="flex justify-center py-2 overflow-x-scroll w-full">
  {tabs.map((tab, index) => (
    <div className="m-2 w-min" key={index}>
      <button
        className={`w-44 lg:text-base text-sm font-medium ${index === activeTab ? "btn " : "btnNonActive"}`}
        onClick={() => {
          setActiveTab(index);
          setActiveTabDaat(tab.tabData);
        }}
      >
        {tab.tabName}
      </button>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Collection;
