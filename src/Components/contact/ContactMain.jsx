import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const ContactMain = () => {
  return (
    <div className='w-full flex justify-center items-center px-4 lg:py-10 py-5'>
        <div className="container lg:w-[90%]">
<div className="grid grid-cols-12 gap-6">

<div className="lg:col-span-4 col-span-12">
<ContactInfo />
</div>

<div className="lg:col-span-8 col-span-12">
<ContactForm />
</div>

</div>
        </div>
    </div>
  )
}

export default ContactMain