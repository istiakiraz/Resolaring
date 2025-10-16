import React from 'react'
import coverImg from '../svg/bookpagecover.svg'
import { FaArrowRightLong } from 'react-icons/fa6'
import PrimaryButton from '../../common/PrimaryButton'

export default function BookHeader() {
    return (
        <section className="relative   mx-auto  py-10 lg:py-30   flex items-center justify-center text-white overflow-hidden">
            {/* bgImg + gradient */}
            <div className="absolute inset-0 z-0">
                <img
                    src={coverImg}
                    alt="Solar Panel Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/0" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-11/12 2xl:w-9/12  text-left md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Ask a Question about Product
                </h1>
                <p className="text-lg md:text-xl w-6/12 mb-6 text-gray-200">
                    Check out our availability and book the date and time that works for you
                </p>

            </div>
        </section>
    )
}
