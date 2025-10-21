import React from 'react'
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router';

export default function Verification() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);

          if (data.code) {
        navigate("/auth/set-new-pass");
    }
    }

  
    return (
        <div className='space-y-3 w-full items-center'>

            <h1 className='lg:text-5xl text-3xl mb-2 font-semibold'>We will send verification code on your email ID</h1>

            <form className='mt-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-1 sm:mb-2">
                    {/* code */}
                    <div className="mb-4 flex flex-col gap-2 relative">
                        <label className='text-sm'>Code</label>
                        <input
                            placeholder="Enter your code"
                            {...register("code", { required: true })}
                            type="number"
                            className="pl-10 flex-grow  h-12 md:max-w-6/12 w-full rounded-xl focus:outline-secondary  transition duration-200 bg-gray-100 border"
                            name="code"
                        />
                    </div>
                </div>

                <div className="mt-4  sm:mb-4">
                    <button className='bg-yellow-400 duration-500 text-black text-sm py-3 cursor-pointer flex gap-2 items-center rounded-full font-medium hover:bg-yellow-500 md:max-w-6/12 w-full place-content-center ' type="submit">
                        Verify
                    </button>
                </div>
            </form>

        </div>
    )
}
