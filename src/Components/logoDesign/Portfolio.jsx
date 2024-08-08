import React from 'react'
import CollectionData from '../CollectionDataLogo'

const Portfolio = () => {
  return (
    <div className='w-full flex justify-center items-center lg:py-16 py-8 px-4'>
        <div className="container lg:w-[90%]">
        <h1 className='lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-800 text-center' style={{lineHeight: "1.4"}}>Choose The Right <span className='text-primary'>Type of Logo</span> That Color Your Business</h1>
        <p className='font-light mt-8 text-gray-500 text-center'>The impressive logo and branding services that Artevian offers are proof of our competence. We use our expertise as digital agents to pick fonts with care and combine them with colour and imagery in a way that accurately represents your brand's values. Businesses of all sizes, from fledgling startups to long-standing corporations, can benefit from our expert branding services, which include logo and brand design customization.</p>
        <CollectionData />
        </div>
        
    </div>
  )
}

export default Portfolio