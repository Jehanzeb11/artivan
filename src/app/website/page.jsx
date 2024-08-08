import BusinessCounter from '@/Components/BusinessCounter'
import Pricing from '@/Components/logoDesign/Pricing'
import Testimonials from '@/Components/Testimonials'
import Banner from '@/Components/websiteDesign/Banner'
import Hero from '@/Components/websiteDesign/Hero'
import Portfolio from '@/Components/websiteDesign/Portfolio'
import React from 'react'

const Website = () => {
  return (
    <>
        <Banner/>
        <Hero/>
        <BusinessCounter/>
        <Portfolio />
        <Pricing/>
        <Testimonials/>
    </>
  )
}

export default Website