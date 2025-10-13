import React from 'react'
import manImg from '../svg/manImg.svg'

export default function Member() {
    return (
        <div>

            <section className='2xl:max-w-9/12 py-20  max-w-11/12 mx-auto' >
                <h2 className='text-4xl font-bold mb-6 text-left'>Our Expert Member</h2>

                <div className='grid grid-cols-4 gap-10'>

                    <div className='bg-primary-foreground hover:border-amber-300 border-2 hover:scale-105 duration-500 ease-in-out flex justify-center flex-col p-4 space-y-2 rounded-2xl'>
                        <img className='rounded-2xl' src={manImg} alt="man picture" />
                        <h6 className='font-semibold text-xl'>Jhon Doe</h6>
                        <p className='text-gray-600' >Engineer</p>
                    </div>
                    <div className='bg-primary-foreground hover:border-amber-300 border-2 duration-500 hover:scale-105 ease-in-out p-4 space-y-2 flex justify-center flex-col rounded-2xl'>
                        <img className='rounded-2xl' src={manImg} alt="man picture" />
                        <h6 className='font-semibold text-xl'>Jhon Doe</h6>
                        <p className='text-gray-600' >Engineer</p>
                    </div>
                    <div className='bg-primary-foreground hover:border-amber-300 border-2 duration-500 hover:scale-105 ease-in-out p-4 space-y-2 flex justify-center flex-col rounded-2xl'>
                        <img className='rounded-2xl' src={manImg} alt="man picture" />
                        <h6 className='font-semibold text-xl'>Jhon Doe</h6>
                        <p className='text-gray-600' >Engineer</p>
                    </div>
                    <div className='bg-primary-foreground hover:border-amber-300 border-2 duration-500 hover:scale-105 ease-in-out p-4 space-y-2 flex justify-center flex-col rounded-2xl'>
                        <img className='rounded-2xl' src={manImg} alt="man picture" />
                        <h6 className='font-semibold text-xl'>Jhon Doe</h6>
                        <p className='text-gray-600' >Engineer</p>
                    </div>


                </div>

            </section>

        </div>
    )
}
