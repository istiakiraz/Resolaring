import React from 'react'
import PrimaryButton from '../../common/PrimaryButton'


export default function ChooseAccount() {
  return (
    <div className='space-y-3  items-center'>

      <h1 className='text-5xl mb-4 font-semibold'>Choose account</h1>

      <PrimaryButton to='/auth/sign-up' className=' px-50 ' >Buyer</PrimaryButton>
      <PrimaryButton to='/auth/sign-up' className='px-50' >Seller</PrimaryButton>

    </div>
  )
}
