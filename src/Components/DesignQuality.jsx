import React from 'react'
import Image from 'next/image'
import quality from "../assets/quality-service.png"
import team from "../assets/team-collab.png"
const DesignQuality = () => {
  return (
    <div className='w-full flex justify-center items-center px-4 lg:py-16 py-8'>
        <div className="container lg:w-[90%] w-full">
<h1 className='text-center text-gray-900 font-bold lg:text-6xl sm:text-4xl xl:px-64 lg:px-36 px-0'>Digitally Focused <span className='text-primary'>Quality Design</span> Services</h1>
<p className="my-6 text-center text-gray-700">Artevian is committed to creating a digital presence that has a lasting impact. At Artevian, we strive to ensure that your brand resonates strongly across all online platforms.</p>
<p className="text-center text-gray-700">Here at Artevian, we can make your brand stand out on any and all digital platforms.</p>

<div className="grid grid-cols-12 gap-6 my-8">

<div className="md:col-span-6 col-span-12 rounded-md bg-gray-100 border-[1px] border-gray-300 p-4">
            <div className="w-fit p-2 rounded-lg bg-my-gradient">
              <Image
                src={quality}
                alt="hero"
                width={1000}
                height={1000}
                className="w-10"
              />
            </div>
            <p className="text-xl mt-2.5 font-bold"><span className="text-primary mr-2">#1</span> Delivery</p>

<p className="text-gray-500 mt-4">Whatever may come our way, we will never give up on our relentless quest of excellence. We are thrilled to meet your expectations with exceptional quality that sets us apart from others, being pioneers in the digital realm.s</p>

          </div>

          <div className="md:col-span-6 col-span-12 rounded-md bg-gray-100 border-[1px] border-gray-300 p-4">
            <div className="w-fit p-2 rounded-lg bg-my-gradient">
              <Image
                src={team}
                alt="hero"
                width={1000}
                height={1000}
                className="w-10"
              />
            </div>
            <p className="text-xl mt-2.5 font-bold"><span className="text-primary mr-2">#2</span> Team Collaboration</p>

<p className="text-gray-500 mt-4">Whatever may come our way, we will never give up on our relentless quest of excellence. We are thrilled to meet your expectations with exceptional quality that sets us apart from others, being pioneers in the digital realm.s</p>

          </div>

</div>

<div className="my-20 relative">
<div className='w-full border-[1px] border-primary'></div>
<div className="h-10 border-[1px] border-primary absolute -top-10 translate-y-1/2"></div>
<div className="h-10 border-[1px] border-primary absolute -top-10 translate-y-1/2"></div>
</div>

        </div>      
    </div>
  )
}

export default DesignQuality
