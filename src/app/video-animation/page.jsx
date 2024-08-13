import BusinessCounter from '@/Components/BusinessCounter'
import Pricing from '@/Components/logoDesign/Pricing'
import Testimonials from '@/Components/Testimonials'
import Banner from '@/Components/video/Banner'
import Hero from '@/Components/video/Hero'
import Portfolio from '@/Components/video/Portfolio'
import React from 'react'

const VideoAnimation = () => {
  return (
    <div className=' overflow-hidden'>
        <Banner/>
        <Hero />
        <BusinessCounter />
        <Portfolio />
        <Pricing />
        <Testimonials />
    </div>
  )
}

export default VideoAnimation