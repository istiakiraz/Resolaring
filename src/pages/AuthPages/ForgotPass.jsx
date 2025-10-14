import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export default function ForgotPass() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);

        if (data.email) {
            navigate("/auth/verification");
        }
    }
    return (
        <div className='space-y-3  items-center'>

            <h1 className='text-5xl mb-2 font-semibold'>Verify Email</h1>

            <form className='mt-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-1 sm:mb-2">
                    {/* email */}
                    <div className="mb-4 relative">
                        <label className='text-sm'>Email*</label>
                        <input
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                            type="email"
                            className="pl-10 flex-grow w-full h-12 rounded-xl focus:outline-secondary  transition duration-200 bg-gray-100 border"
                            name="email"
                        />
                    </div>
                </div>

                <div className="mt-4  sm:mb-4">

                    <button className='bg-yellow-400 duration-500 text-black text-sm py-3 cursor-pointer flex gap-2 items-center rounded-full font-medium hover:bg-yellow-500 px-50' type="submit">
                        Send
                    </button>
                </div>
            </form>

        </div>
    )
}
