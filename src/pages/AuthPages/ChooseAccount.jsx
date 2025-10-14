import React from 'react'
import PrimaryButton from '../../common/PrimaryButton'

export default function ChooseAccount() {
  return (
    <div className='space-y-3  items-center'>

           <h1 className='text-2xl font-semibold'>Choose account</h1>
           <PrimaryButton className=' px-30 ' >Buyer</PrimaryButton>
           <PrimaryButton className='px-30' >Seller</PrimaryButton>

    </div>
  )
}
