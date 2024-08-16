import React from 'react'
import Image from 'next/image'
import hero from '@/assets/website-hero.png'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='w-full flex justify-center items-center lg:py-10 py-5 px-4 max-h-screen max-sm:my-10'>
        <div className="container lg:w-[90%]">
            <div className="grid grid-cols-12 lg:gap-4 gap-3">
                <div className="md:col-span-6 col-span-12" data-aos-delay="100" data-aos="fade-right">
                    <h4 className='lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-800 lg:mb-8 mb-3'>Results-Oriented <span className='text-primary'>Website Solutions</span></h4>
                    <p className='text-gray-500 lg:my-4 my-2'>Artevian's custom website design and development services allow for a seamless transition into the digital world. As a leading innovator in the field, we provide comprehensive digital business solutions for businesses of all kinds. Our bespoke solutions are designed to suit your specific needs and exceed your expectations. Our expertise covers a wide range of needs, including creating polished and professional websites for small businesses and building strong E-commerce platforms.</p>
                   <Link href={"/contact"}> <button className='btn lg:mt-8 mt-4'>Contact Us</button></Link>
                </div>

                <div className="md:col-span-6 col-span-12 flex justify-end max-sm:justify-center" data-aos-delay="100" data-aos="fade-left">
                    <Image src={hero} alt="hero" width={1000} height={1000} className='xl:w-[70%] lg:w-[90%] max-sm:w-[60%] object-contain'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero