import React from 'react'
import PrimaryButton from '../../../common/PrimaryButton'
import { GoBell, GoPlusCircle } from "react-icons/go";
import { FcBusinessman } from 'react-icons/fc';
import OverTable from '../../../components/OverviewComponents/OverTable';



export default function Overview() {
  return (
    <div className='  -mt-5 mx-auto' >

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
