import React from 'react'
import logo from '../components/svg/footerLogo.svg'
import { Link } from 'react-router'
import { TfiWorld } from 'react-icons/tfi'
import { BsTwitterX } from 'react-icons/bs'
import { FaArrowRightLong, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PrimaryButton from '../common/PrimaryButton'

export default function Footer() {

  const inputStyles = "bg-[#273a5a] border border-slate-700 text-white placeholder:text-slate-400 focus:outline-secondary  rounded-md";
  return (
    <section className='bg-primary text-white py-20' >

      <div className='2xl:max-w-9/12 flex  items-start gap-10 max-w-11/12 mx-auto '>

        <div className='w-4/12'>
          {/* logo */}
          <Link to="/" className="flex flex-col items-start space-y-2">

            <div className='flex items-center gap-2'>
              <img src={logo} alt="Resolaring Logo" className="h-10 w-auto" />
              <span className="text-4xl font-semibold">Resolaring</span>
            </div>
            <p className="text-[12px] text-gray-400 leading-none">Recycling and installing panels for a better future</p>
          </Link>

          <p className="text-[12px] mt-6  leading-5 text-gray-400 ">At Resolaring, we believe in creating a sustainable future by promoting the reuse and recycling of solar equipment. Our platform connects buyers and sellers of second-hand solar panels, reducing waste and supporting green energy initiatives.</p>

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

        {/* footer link */}

        <div>
          <p className="font-semibold tracking-wide ">Quick Link</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/why-resolaring?"
                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Why Resolaring?
              </a>
            </li>
            <li>
              <a
                href="/recycling-process"
                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                The Recycling Process
              </a>
            </li>
            <li>
              <a
                href="/marketplace"
                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Panels
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Shared Gallery
              </a>
            </li>
            <li>
              <a
                href="/br"
                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Book Online
              </a>
            </li>
            <li>
              <a
                href="/be"
                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Become a Seller
              </a>
            </li>
            <li>
              <a
                href="/be"
                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Explore the Marketplace
              </a>
            </li>
          </ul>
        </div>

        {/* contact form  */}

        <div className="max-w-4xl mx-auto pl-20  rounded-xl shadow-lg">
          <div className="mb-8">
            <h2 className="font-bold text-white mb-2">Contact</h2>
            <p className="text-[12px] mt-6  leading-5 text-gray-400">
              Our team is here to answer any questions you may have, so please contact us by
              filling out the following fields or directly via email or phone!
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Grid for Name, Cognoms, Telephone, and E-mail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-8">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">Name*</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name here"
                  className={inputStyles}
                />
              </div>
              <div>
                <Label htmlFor="cognoms" className="text-white mb-2 block">Cognoms*</Label>
                <Input
                  type="text"
                  id="cognoms"
                  placeholder="Cognoms here"
                  className={inputStyles}
                />
              </div>
              <div>
                <Label htmlFor="telephone" className="text-white mb-2 block">Telephone*</Label>
                <Input
                  type="tel"
                  id="telephone"
                  placeholder="Number here"
                  className={inputStyles}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white mb-2 block">E-mail*</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email here"
                  className={inputStyles}
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-8">
              <Label htmlFor="message" className="text-white mb-2 block">Message*</Label>
              <Textarea
                id="message"
                placeholder="Message here"
                className={`${inputStyles} min-h-[100px]`}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <PrimaryButton type="submit" icon={FaArrowRightLong}>
                Send Message
              </PrimaryButton>

            </div>
          </form>
        </div>


      </div>

      <div className='2xl:max-w-9/12 flex justify-center items-center gap-3 mt-10 pt-10 border-t border-gray-600 mx-auto'>

      <img className='size-8' src={logo} alt="logo" />
      <p className='text-[12px] text-gray-400'>Copyright 2025. All Rights Reserved. Powered by the Awesomeness of Fresh Fruit.</p>

      </div>

    </section>
  )
}
