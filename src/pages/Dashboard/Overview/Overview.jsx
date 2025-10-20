import React from 'react'
import PrimaryButton from '../../../common/PrimaryButton'
import { GoBell, GoPlusCircle } from "react-icons/go";
import { FcBusinessman } from 'react-icons/fc';
import OverTable from '../../../components/OverviewComponents/OverTable';



export default function Overview() {
  return (
    <div className=' lg:w-11/12 mx-auto' >

        {/* top bar */}
        <nav className='flex   sticky top-0 z-20 bg-white py-5 items-center justify-between' >
            <h2 className='text-2xl lg:text-3xl mb-2 lg:mb-0 font-bold' >Overview</h2>
            <div className='flex flex-wrap  items-center gap-3' >
                <input placeholder='Search for product' className=' px-4 py-2 hidden xl:block xl:w-96 rounded-full border bg-gray-100 border-gray-200' type="text" name="" id="" />
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
        </nav>

        {/* number content  */}

        <div className='py-10 grid 2xl:grid-cols-4  *:cursor-grab items-center gap-4  '>

            <div className='bg-pink-100 rounded-xl p-4 ' >
                <p className=' text-gray-400 mb-2' >Total Listing</p>
                <h6 className='text-2xl font-bold'>15</h6>
            </div>
            <div className='bg-yellow-100 rounded-xl p-4 ' >
                <p className=' text-gray-400 mb-2' >Pending Orders</p>
                <h6 className='text-2xl font-bold'>3</h6>
            </div>
            <div className='bg-green-100 rounded-xl p-4 ' >
                <p className=' text-gray-400 mb-2' >Sales Revenue</p>
                <h6 className='text-2xl font-bold'>$5,000</h6>
            </div>
            <div className='bg-purple-100 rounded-xl p-4 ' >
                <p className=' text-gray-400 mb-2' >Profile Completion</p>
                <h6 className='text-2xl font-bold'>90% Done</h6>
            </div>



        </div>

        <OverTable></OverTable>


    </div>
  )
}
