import React from 'react'
import PrimaryButton from '../../../common/PrimaryButton'
import { GoBell, GoPlusCircle } from "react-icons/go";
import { FcBusinessman } from 'react-icons/fc';


export default function Overview() {
  return (
    <div className=' w-11/12 mx-auto' >
        {/* <nav className='flex items-center justify-between' >
            <h2 className='text-2xl lg:text-3xl font-bold' >Overview</h2>
            <div className='flex items-center gap-2' >
                <input placeholder='Search for product' className=' px-4 py-2 w-96 rounded-full border bg-gray-100 border-gray-200' type="text" name="" id="" />
                <PrimaryButton className='w-fit' icon={GoPlusCircle} >
                    Add Product
                </PrimaryButton>
                <GoBell size={25} />

                <div className='flex items-center gap-2' >
                    <div className='p-2 rounded-full w-fit bg-gray-200' ><FcBusinessman size={30} /></div>
                    <span>
                        <h6 className='font-bold' >John kal</h6>
                        <p className='text-gray-400' >Seller</p>
                    </span>
                </div>
            </div>
        </nav> */}


    </div>
  )
}
