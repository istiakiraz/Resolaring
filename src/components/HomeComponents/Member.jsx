import React from 'react'
import manImg from '../svg/manImg.svg'
import bgSvg from '../svg/star-svg.svg'
import { FaLinkedinIn, FaShareNodes, FaSkype } from 'react-icons/fa6'
import { RiMessage2Fill } from "react-icons/ri";

export default function Member() {
    return (
        <div className='relative overflow-hidden' >

             <img className="absolute top-10  left-2 z-1" src={bgSvg} alt="bg svg" />
                   <img className="absolute bottom-10  right-2 z-1" src={bgSvg} alt="bg svg" />



            <section className='2xl:max-w-9/12 py-10 lg:py-20  relative z-20 max-w-11/12 mx-auto' >
                <h2 className='text-4xl font-bold mb-6 text-left'>Our Expert Member</h2>

                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10'>

                    <div className='bg-primary-foreground group relative hover:border-amber-300 border-2 hover:scale-105 duration-500 ease-in-out flex justify-center flex-col p-4 space-y-2 rounded-2xl'>

                      <span className='absolute cursor-pointer bottom-30  right-8 bg-[#B45C3D] rounded-full p-2 z-20'>  <FaShareNodes color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-40 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <FaLinkedinIn color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-50 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <RiMessage2Fill color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-60 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <FaSkype color='white' /></span>

                        <img className='rounded-2xl' src={manImg} alt="man picture" />
                        <h6 className='font-semibold text-xl'>Jhon Doe</h6>
                        <p className='text-gray-600' >Engineer</p>
                    </div>
                    <div className='bg-primary-foreground group relative hover:border-amber-300 border-2 hover:scale-105 duration-500 ease-in-out flex justify-center flex-col p-4 space-y-2 rounded-2xl'>

                      <span className='absolute cursor-pointer bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-20'>  <FaShareNodes color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-40 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <FaLinkedinIn color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-50 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <RiMessage2Fill color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-60 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <FaSkype color='white' /></span>

                        <img className='rounded-2xl' src={manImg} alt="man picture" />
                        <h6 className='font-semibold text-xl'>Jhon Doe</h6>
                        <p className='text-gray-600' >Engineer</p>
                    </div>
                    <div className='bg-primary-foreground group relative hover:border-amber-300 border-2 hover:scale-105 duration-500 ease-in-out flex justify-center flex-col p-4 space-y-2 rounded-2xl'>

                         <span className='absolute cursor-pointer bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-20'>  <FaShareNodes color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-40 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <FaLinkedinIn color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-50 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <RiMessage2Fill color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-60 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <FaSkype color='white' /></span>

                        <img className='rounded-2xl' src={manImg} alt="man picture" />
                        <h6 className='font-semibold text-xl'>Jhon Doe</h6>
                        <p className='text-gray-600' >Engineer</p>
                    </div>
                    <div className='bg-primary-foreground group relative hover:border-amber-300 border-2 hover:scale-105 duration-500 ease-in-out flex justify-center flex-col p-4 space-y-2 rounded-2xl'>

                         <span className='absolute cursor-pointer bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-20'>  <FaShareNodes color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-40 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <FaLinkedinIn color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-50 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <RiMessage2Fill color='white' /></span>
                      <span className='absolute cursor-pointer group-hover:bottom-60 duration-300  bottom-30 right-8 bg-[#B45C3D] rounded-full p-2 z-10'>  <FaSkype color='white' /></span>
                      
                        <img className='rounded-2xl' src={manImg} alt="man picture" />
                        <h6 className='font-semibold text-xl'>Jhon Doe</h6>
                        <p className='text-gray-600' >Engineer</p>
                    </div>

                 


                </div>

            </section>

        </div>
    )
}
