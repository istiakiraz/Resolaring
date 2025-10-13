import React from 'react'
import logo from '../../src/components/svg/footerLogo.svg'
import { Link } from 'react-router'
import { TfiWorld } from 'react-icons/tfi'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  return (
    <section className='bg-primary text-white py-20' >

    <div className='2xl:max-w-9/12 max-w-11/12 mx-auto '>

    <div>
       {/* Logo */}
        <Link to="/" className="flex flex-col items-start space-y-2">

          <div className='flex items-center gap-2'>
            <img src={logo} alt="Resolaring Logo" className="h-10 w-auto" />
            <span className="text-4xl font-semibold">Resolaring</span>
          </div>
          <p className="text-[12px] text-gray-400 leading-none">Recycling and installing panels for a better future</p>
        </Link>

         <p className="text-[12px] mt-6 w-4/12  leading-5 text-gray-400 ">At Resolaring, we believe in creating a sustainable future by promoting the reuse and recycling of solar equipment. Our platform connects buyers and sellers of second-hand solar panels, reducing waste and supporting green energy initiatives.</p>

      {/* support details */}
         <div className='mt-6'>
          <h6 className='font-bold' >Support</h6>
          <p className='mt-2 text-gray-400  ' >Email: resolaring@gmail.com</p>
          <p className='mt-2 text-gray-400  ' >Phone: +34 618207554</p>
          <p className='mt-2 text-gray-400  ' >Location: Montferrer y Castellbò, 25712</p>
         </div>

         {/* social link */}

         <div className='flex items-center mt-6 gap-10'>
           <span className='flex border border-white rounded-4xl items-center gap-2 px-3 py-2'>
                <TfiWorld color='white' />
                <p className='text-white' >EN</p>
              </span>

          <span className='flex *:size-6 *:hover:scale-105 *:duration-300 *:ease-in-out *:cursor-pointer  items-center gap-3'>
              <BsTwitterX />
            <FaYoutube />
            <FaFacebookF />
            <FaLinkedinIn />
          </span>

         </div>
    </div>

    </div>

    </section>
  )
}
