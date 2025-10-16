import React from 'react'
import coverImg from '../svg/recycling-process-page-cover.svg'
import { FaArrowRightLong } from 'react-icons/fa6'
import PrimaryButton from '../../common/PrimaryButton'

export default function RecyclingHeader() {
  return (
    
<div> 
               <section className="relative mx-auto py-10 lg:py-28 flex items-center justify-center text-white overflow-hidden">
             {/* Background Image + Gradient */}
             <div className="absolute inset-0 z-0">
               <img src={coverImg} alt="Solar Panel Background" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/0" />
             </div>
           
             {/* Content */}
             <div className="relative  z-10 max-w-[90%] 2xl:max-w-[75%] text-left">
               <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                
           The process of recycling photovoltaic panels
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
</div>
       
  )
}
