
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full flex justify-center items-center px-4 mt-8 py-8' data-aos-delay="0" data-aos="fade-down">
      <div className="bg-[#F7F7FA] lg:py-16 py-8 w-full flex justify-center items-center">
        <div className="container lg:w-[90%]">
          <h4 className='lg:text-3xl sm:text-2xl text-xl font-bold text-primary text-center'>Explore Our Packages</h4>
          <p className='font-light max-xl:text-sm text-center text-gray-700 ld:mt-8 mt-4'>Discover tailored solutions for every need. Explore our range of packages designed to fit your requirements and budget.</p>
        </div>
      </div>
    </div>
  )
}

export default Banner