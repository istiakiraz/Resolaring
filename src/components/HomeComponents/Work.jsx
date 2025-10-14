import React from 'react'
import workImg from '../../assets/Img/workImg.png'
import svg1 from '../svg/svg1.svg'
import svg2 from '../svg/svg2.svg'
import svg3 from '../svg/svg3.svg'
import svg4 from '../svg/svg4.svg'
import PrimaryButton from '../../common/PrimaryButton'
import { FaArrowRightLong } from 'react-icons/fa6'
import circleSvg from '../svg/circle-svg.svg'

export default function Work() {



  return (
    <div className='bg-primary-foreground overflow-hidden  relative  ' >

         <img className="absolute  size-220  -right-100 z-1" src={circleSvg} alt="circle svg" />



        
        <section className='2xl:max-w-9/12 py-20 relative z-10 flex items-center gap-10 max-w-11/12 mx-auto' >

        <img className='rounded-2xl' src={workImg} alt="worker img" />

        <div>
            <h2 className='text-4xl font-bold mb-6 text-left'>How Resolaring Works</h2>

            <div className='grid grid-cols-2 gap-10' >

                <div className='bg-white rounded-2xl hover:bg-secondary/50 duration-400 ease-in-out space-y-4 p-5'>

                    <img src={svg2} alt="svg img" />
                              <h5 className=" text-2xl font-bold">Create an Account</h5>
                              <p className=' text-sm w-6/12 text-gray-500' >Highlights the ease of signing up and positions the platform as a gateway to solar opportunities.</p>
                </div>

                <div className='bg-white rounded-2xl hover:bg-secondary/50 duration-400 ease-in-out space-y-4 p-5'>

                    <img src={svg1} alt="svg img" />
                              <h5 className=" text-2xl font-bold">List Your Equipment</h5>
                              <p className=' text-sm w-6/12 text-gray-500' >Reinforces the sustainability mission and ties it to the concept of the circular economy.</p>
                </div>

                <div className='bg-white rounded-2xl hover:bg-secondary/50 duration-400 ease-in-out space-y-4 p-5'>

                    <img src={svg3} alt="svg img" />
                              <h5 className=" text-2xl font-bold">Connect with Buyers</h5>
                              <p className=' text-sm w-6/12 text-gray-500' >Appeals to sellers by emphasizing the environmentally conscious nature of the buyers on the platform.</p>
                </div>
                <div className='bg-white rounded-2xl hover:bg-secondary/50 duration-400 ease-in-out space-y-4 p-5'>

                    <img src={svg4} alt="svg img" />
                              <h5 className=" text-2xl font-bold">Transactions Securely</h5>
                              <p className=' text-sm w-6/12 text-gray-500' >Focuses on the security of the checkout process and reassures users about their safety.</p>
                </div>

            </div>

            <PrimaryButton to="/sell" icon={FaArrowRightLong} className='w-fit mt-6 px-8' >
                Start Selling Today
            </PrimaryButton>


        </div>


        </section>


    </div>
  )
}
