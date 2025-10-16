import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import coverImg from '../../assets/Img/coverImg.png'
import PrimaryButton from '../../common/PrimaryButton'

export default function Header() {
  return (
    <section className="relative   mx-auto py-10 lg:py-30   flex items-center justify-center text-white overflow-hidden">
      {/* Background Image + Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={coverImg} 
          alt="Solar Panel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 2xl:w-9/12 w-11/12 text-left ">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
         Reusing solar energy
        </h1>
        <p className="text-lg md:text-xl text-left lg:w-6/12 mb-6 text-gray-200">
         At Resolaring we are committed to giving photovoltaic panels a second life. We make agreements with suppliers and installers so that the panels do not end up in landfills.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-4 justify-start">
         <PrimaryButton to="/marketplace" icon={FaArrowRightLong}>
Browse Marketplace
         </PrimaryButton>
         
        </div>
      </div>
    </section>
  )
}
