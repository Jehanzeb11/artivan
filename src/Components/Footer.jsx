"use client"
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "@/assets/black-logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='w-full bg-[#F7F7FA] md:py-16 pt-10 pb-5 flex justify-center items-center flex-col'>

            <div className="container lg:w-[90%]">

                <div className="grid grid-cols-12 lg:gap-16 sm:gap-6 gap-4 px-2.5">


                    <div className="lg:col-span-4 sm:col-span-6 col-span-12 flex flex-col sm:gap-8 gap-3">
                        <p className="text-gray-500">Artevian is an innovative tech company that wants to change online technology. Artevian provides creative solutions using AI, blockchain, and data analytics to help people and organizations.</p>
                        <div>
                            <h4 className="font-bold text-xl">Give Us a Call</h4>
                            <h1 className="text-3xl font-bold text-primary mt-3">+1 647 693 9708</h1>
                        </div>

                    </div>

                    <div className="lg:col-span-2 sm:col-span-6 col-span-12">

                        <h4 className="font-bold text-xl text-primary">About Us</h4>

                        <ul className="text-gray-500 mt-4 flex flex-col sm:gap-3 gap-1">
                            <li className="border-b-2 border-transparent transition-colors duration-300 ease-in cursor-pointer hover:border-primary w-fit">Home</li>
                            <li className="border-b-2 border-transparent transition-colors duration-300 ease-in cursor-pointer hover:border-primary w-fit">About</li>
                            <li className="border-b-2 border-transparent transition-colors duration-300 ease-in cursor-pointer hover:border-primary w-fit">Service</li>
                            <li className="border-b-2 border-transparent transition-colors duration-300 ease-in cursor-pointer hover:border-primary w-fit">Portofolio</li>
                            <Link href="/contact"><li className="border-b-2 border-transparent transition-colors duration-300 ease-in cursor-pointer hover:border-primary w-fit">Contact Us</li></Link>
                        </ul>

                    </div>

                    <div className="lg:col-span-3 sm:col-span-6 col-span-12">

                        <h4 className="font-bold text-xl text-primary">Contact Us</h4>

                        <ul className="text-gray-500 mt-4 flex flex-col gap-3">
                            <li className="cursor-pointer flex gap-2"> <span><FaLocationDot color='#059cc5' size={24} /></span> ARTEVIAN INC. 200 Matheson Blvd W 104 Mississauga, ON L5R 3L7, Canada</li>
                            <li className="cursor-pointer flex gap-2"> <span><MdMarkEmailRead color='#059cc5' size={24} /></span> info@artevian.com</li>
                            <li className="cursor-pointer flex gap-2"> <span><FaPhone color='#059cc5' size={24} /></span> +1 8607763387</li>

                        </ul>

                    </div>


                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex flex-col gap-3">

                        <Image src={logo} alt="hero" width={1000} height={1000} className="w-full object-contain" />

                        <div className="flex gap-2 justify-evenly items-center w-full">
                            <button className="p-3.5 rounded-full shadow-lg bg-white hover:bg-[#0866FF] hover:text-white transition-colors duration-200 ease-in-out"><FaFacebookF size={20} /></button>
                            <button className="p-3.5 rounded-full shadow-lg bg-white hover:bg-insta-gradient hover:text-white transition-colors duration-200 ease-in-out"><FaInstagram size={20} /></button>
                            <button className="p-3.5 rounded-full shadow-lg bg-white hover:bg-[#0AA5F6] hover:text-white transition-colors duration-200 ease-in-out"><FaTwitter size={20} /></button>
                            <button className="p-3.5 rounded-full shadow-lg bg-white hover:bg-[#126BCD] hover:text-white transition-colors duration-200 ease-in-out"><FaLinkedinIn size={20} /></button>
                        </div>

                    </div>

                </div>



            </div>

            <div className="border-t-2 border-gray-300 mt-10 w-full">
            </div>

            <div className="container lg:w-[90%] flex justify-between items-center gap-3 max-sm:flex-col w-full max-lg:px-4 lg:py-5 py-3 text-gray-500 text-sm">
                <p>Copyright ® 2024 All Right Reserved</p>

                <div className="flex gap-3">
                    <p className="px-2 border-r-2 border-gray-300">Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>

            </div>

        </div>
    )
}

export default Footer