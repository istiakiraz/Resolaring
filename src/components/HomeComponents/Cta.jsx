import React from 'react'
import bgImg from '../svg/ctaBg.svg'
import PrimaryButton from '../../common/PrimaryButton'
import SecondaryButton from '../../common/SecondaryButton'

export default function Cta() {
  return (
     <div
          className="w-full py-20 text-center text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >

            <h2 className='w-6/12 text-center mb-6 mx-auto text-6xl'>Ready to Buy, Sell, or Recycle Solar Equipment?</h2>
            <p className='text-2xl' >Sign up now and start contributing to a greener future.</p>
            <div className='flex gap-10 items-center justify-center mt-6'>
                <PrimaryButton className='w-fit' >Become a Seller</PrimaryButton>
                <SecondaryButton className='w-fit'>Explore the Marketplace</SecondaryButton>
            </div>
            </div>
  )
}
