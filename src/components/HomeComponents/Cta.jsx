import React from 'react'
import bgImg from '../svg/ctaBg.svg'
import PrimaryButton from '../../common/PrimaryButton'
import SecondaryButton from '../../common/SecondaryButton'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Cta() {
  return (
     <div
          className="w-full py-30  text-center text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >

            <h2 className='lg:w-6/12 text-center w-11/12 mb-6 mx-auto text-3xl lg:text-6xl'>Ready to Buy, Sell, or Recycle Solar Equipment?</h2>
            <p className='lg:text-2xl w-11/12' >Sign up now and start contributing to a greener future.</p>

            <div className='flex gap-5 flex-col md:flex-row w-11/12 mx-auto items-center justify-center mt-6'>
                <PrimaryButton to="/seller" icon={FaArrowRightLong} className='w-fit' >Become a Seller</PrimaryButton>
                <SecondaryButton className='w-fit border-2 '>Explore the Marketplace</SecondaryButton>
            </div>
            </div>
  )
}
