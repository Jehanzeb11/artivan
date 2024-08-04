"use client";
import React, { useState } from "react";
import CollectionData from "./CollectionDataLogo";
import CollectionDataB2B from "./CollectionDataB2B";
import CollectionDataWebsite from "./CollectionDataWebsite";
import CollectionDataVideo from "./CollectionDataVideo";

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
      <div className="container xl:w-[90%] w-full">
        <h1 className="lg:text-6xl text-gray-900 sm:text-4xl text-3xl font-bold text-center">
          A <span className="text-primary">Collection</span> That Will Win Your
          Heart Over
        </h1>
        <p className="my-5 text-gray-700 text-center max-lg:text-sm">
          Reveal the potency of our logo design services, manifesting the
          fundamental essence of your business idea through our logo and brand
          design services. Our team's specialized expertise in niche markets
          positions us as the top choice in the business area.
        </p>

        <div className="flex justify-center items-center flex-wrap py-2 w-full">
  {tabs.map((tab, index) => (
    <div className="m-2 w-lg" key={index}>
      <button
        className={` lg:text-base text-sm font-medium ${index === activeTab ? "btn " : "btnNonActive"}`}
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

{activeTab === 0 ? <CollectionData /> : activeTab === 2 ? <CollectionDataB2B/> :  activeTab === 3 ?  <CollectionDataWebsite />: activeTab === 4 ? <CollectionDataVideo /> : null}


      </div>
    </div>
  );
};

export default Collection;