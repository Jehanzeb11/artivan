import BusinessCounter from '@/Components/BusinessCounter'
import Banner from '@/Components/logoDesign/Banner'
import Hero from '@/Components/logoDesign/Hero'
import Portfolio from '@/Components/logoDesign/Portfolio'
import Pricing from '@/Components/logoDesign/Pricing'
import Testimonials from '@/Components/Testimonials'
import React from 'react'

const LogoDesign = () => {
  return (
 <div className=' overflow-hidden'>
 <Banner />
 <Hero />
 <BusinessCounter />
 <Portfolio />
 <Pricing />
 <Testimonials />
 </div>
  )
}

export default LogoDesign