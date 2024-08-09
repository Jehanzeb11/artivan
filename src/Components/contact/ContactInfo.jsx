import React from 'react'
import mailIcon from "@/assets/mail-icon.png"
import callIcon from "@/assets/call-icon.png"
import locatinIcon from "@/assets/location-icon.png"
import map from "@/assets/map.png"
import Image from 'next/image'

const ContactInfo = () => {
    return (
        <div className="flex lg:flex-col sm:flex-row flex-col gap-8">

        <div className="flex flex-col gap-8">

            <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold text-gray-800">Let's Collaborate</h1>

            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing .</p>

            <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3"><Image src={mailIcon} alt="location icon" className="w-6 object-contain" /> <p className="text-gray-500">info@artevian.com</p></li>
                <li className="flex items-center gap-3"><Image src={callIcon} alt="location icon" className="w-6 object-contain" /> <p className="text-gray-500">+94 4444 5555 6</p></li>
                <li className="flex items-center gap-3"><Image src={locatinIcon} alt="location icon" className="w-6 object-contain" /> <p className="text-gray-500">ARTEVIAN INC. 200 Matheson Blvd W 104 Mississauga, ON L5R 3L7, Canada</p></li>
            </ul>

        </div>
        <Image src={map} alt="map" width={1000} height={1000} className='w-full object-contain lg:h-full max-md:max-h-72'/>

        </div>
    )
}

export default ContactInfo