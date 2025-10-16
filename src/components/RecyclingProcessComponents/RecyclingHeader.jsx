import React from 'react'
import coverImg from '../svg/recycling-process-page-cover.svg'
import { FaArrowRightLong } from 'react-icons/fa6'
import PrimaryButton from '../../common/PrimaryButton'

export default function RecyclingHeader() {
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
          <div className="relative z-10 2xl:max-w-9/12 max-w-11/12  text-left md:text-left">
            <h1 className="text-3xl md:text-5xl lg:w-8/12 font-bold mb-4 leading-tight">
             The process of recycling photovoltaic panels
            </h1>
            <p className="text-lg md:text-xl mr-auto lg:w-6/12 mb-6 text-gray-200">
            Exploring Sustainable Methods to Maximize Material Recovery and Minimize Waste in Photovoltaic Panel Recycling.
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
