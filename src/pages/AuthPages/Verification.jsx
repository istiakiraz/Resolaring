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
        <div className='space-y-3  items-center'>

            <h1 className='text-5xl w-120 mb-2 font-semibold'>We will send verification code on your email ID</h1>

            <form className='mt-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-1 sm:mb-2">
                    {/* code */}
                    <div className="mb-4 relative">
                        <label className='text-sm'>Code</label>
                        <input
                            placeholder="Enter your code"
                            {...register("code", { required: true })}
                            type="number"
                            className="pl-10 flex-grow w-full h-12 rounded-xl focus:outline-secondary  transition duration-200 bg-gray-100 border"
                            name="code"
                        />
                    </div>
                </div>

                <div className="mt-4  sm:mb-4">
                    <button className='bg-yellow-400 duration-500 text-black text-sm py-3 cursor-pointer flex gap-2 items-center rounded-full font-medium hover:bg-yellow-500 px-50' type="submit">
                        Verify
                    </button>
                </div>
            </form>

        </div>
    )
}
