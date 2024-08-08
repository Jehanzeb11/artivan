import React from 'react'
import Image from 'next/image'
import hero from '@/assets/website-hero.png'
const Hero = () => {
  return (
    <div className='w-full flex justify-center items-center lg:py-10 py-5 px-4 max-h-screen'>
        <div className="container lg:w-[90%]">
            <div className="grid grid-cols-12 lg:gap-4 gap-3">
                <div className="md:col-span-6 col-span-12">
                    <h4 className='lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-800 lg:mb-8 mb-3'>Results-Oriented <span className='text-primary'>Website Solutions</span></h4>
                    <p className='text-gray-500 lg:my-4 my-2'>Artevian's custom website design and development services allow for a seamless transition into the digital world. As a leading innovator in the field, we provide comprehensive digital business solutions for businesses of all kinds. Our bespoke solutions are designed to suit your specific needs and exceed your expectations. Our expertise covers a wide range of needs, including creating polished and professional websites for small businesses and building strong E-commerce platforms.</p>
                    <button className='btn lg:mt-8 mt-4'>Contact Us</button>
                </div>

                <div className="md:col-span-6 col-span-12 flex justify-end">
                    <Image src={hero} alt="hero" width={1000} height={1000} className='xl:w-[70%] lg:w-[90%] w-full object-contain'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero