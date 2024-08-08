import React from 'react'
import PricingSlider from "@/Components/Pricing";

const Pricing = () => {
  return (
    <div className="flex justify-center px-4 lg:py-16 py-8 items-center bg-[#F7F7FA]">
        <div className="container lg:w-[90%]">
            <h1 className="lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-800 text-center">Pricing & Packages For Businesses Of <span className="text-primary">All Sizes</span></h1>
            <p className="font-light mt-8 text-gray-500 text-center">We guarantee that you will receive design and development services that focus on generating a high return on investment with our smart web design services. Our web design pricing and combo packages are affordable and customized to match your business goals with a unique approach that maximizes your brand’s revenue.</p>
            <PricingSlider />
        </div>
        
    </div>
  )
}

export default Pricing