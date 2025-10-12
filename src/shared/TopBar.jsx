import React from 'react'
import { VscCallOutgoing } from "react-icons/vsc";
import { Input } from "@/components/ui/input"
import { TfiWorld } from 'react-icons/tfi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function TopBar() {
  return (
    <div className='bg-primary hidden md:block  py-6' >

      <div className='2xl:max-w-9/12 max-w-11/12 items-center justify-between flex mx-auto' >

{/* left side */}
     <div className='flex  items-center gap-10' >
       {/* call icon */}
       <div className='flex gap-3 items-center' >
         <VscCallOutgoing size={30} color='#FEC100' />
         <span className='text-white'>
          <h4 className='text-[12px] text-gray-200 ' >Need help?</h4>
          <h4>+34618207554</h4>
         </span>
       </div>

       {/* input */}
    <Input className="bg-white py-5 px-6 w-96 rounded-4xl" placeholder= 'Search for product' />
     </div>


     {/* right side */}

     <div className='flex items-center gap-3'>

    <span className='flex border border-white rounded-4xl items-center gap-2 px-3 py-2'>
      <TfiWorld color='white' />
      <p className='text-white' >EN</p>
    </span>

    <span className='bg-white p-2 rounded-full' >
      <AiOutlineShoppingCart size={25} />
    </span>
    <p className='text-white'>$98.29</p>



     </div>




      </div>


    </div>
  )
}
