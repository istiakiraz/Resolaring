import React from 'react'
import OverTable from '../../../components/OverviewComponents/OverTable'
import PrimaryButton from '../../../common/PrimaryButton'
import { GoBell, GoPlusCircle } from "react-icons/go";
import { FcBusinessman } from 'react-icons/fc';

export default function Order() {
  return (
    <div className='md:w-11/12 -mt-14 mx-auto' >
         {/* top bar */}
                <nav className='flex  items-center bg-white justify-end sticky top-0 py-5 gap-5  lg:justify-between' >
                    <h2 className='text-2xl lg:text-3xl mb-2 lg:mb-0 font-bold' >Order List</h2>
                    <div className='flex  items-center gap-3' >
                        <input placeholder='Search for product' className=' px-4 py-2 w-96 hidden xl:block rounded-full border bg-gray-100 border-gray-200' type="text" name="" id="" />
                        <PrimaryButton className=' hidden md:flex w-fit' icon={GoPlusCircle} >
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
                </nav>
       <div className='py-10' >
         <OverTable></OverTable>
       </div>
    </div>
  )
}
