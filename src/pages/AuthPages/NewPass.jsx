import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

export default function NewPass() {


    const [showPass, setShowPass] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);

        if (data.password1 == data.password2) {
            navigate("/");
        } else {
            alert('password are not same')
        }
    }



    return (
        <div className='space-y-3  items-center'>

            <h1 className='text-5xl mb-2 font-semibold'>Set New Password</h1>

            <form className='mt-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-1 sm:mb-2">



                    {/* pass 1 */}
                    <div className="mb-4 relative">
                        <div className='flex justify-between mb-2 items-center'>
                            <label className='text-sm'>New Password</label>

                        </div>
                        <input
                            placeholder="Password"
                            {...register("password1", { required: true })}
                            type={showPass ? "text" : "password"}
                            className="pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border border-gray-300 rounded-xl appearance-none focus:border-deep-purple-accent-400 focus:outline-secondary focus:shadow-outline"
                            name="password1"
                        />

                        <button
                            type="button"
                            onClick={() => {
                                setShowPass(!showPass);
                            }}
                            className="btn btn-xs absolute top-10  right-6"
                        >
                            {showPass ? (
                                <FaEyeSlash color="gray" size={22} />
                            ) : (
                                <FaEye color="gray" size={22} />
                            )}
                        </button>
                    </div>
                    {/* pass 2 */}
                    <div className="mb-4 relative">
                        <div className='flex justify-between mb-2 items-center'>
                            <label className='text-sm'>Confirm Password</label>

                        </div>
                        <input
                            placeholder="Password"
                            {...register("password2", { required: true })}
                            type={showPass ? "text" : "password"}
                            className="pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border border-gray-300 rounded-xl appearance-none focus:border-deep-purple-accent-400 focus:outline-secondary focus:shadow-outline"
                            name="password2"
                        />

                        <button
                            type="button"
                            onClick={() => {
                                setShowPass(!showPass);
                            }}
                            className="btn btn-xs absolute top-10  right-6"
                        >
                            {showPass ? (
                                <FaEyeSlash color="gray" size={22} />
                            ) : (
                                <FaEye color="gray" size={22} />
                            )}
                        </button>
                    </div>

                </div>

                <div className="mt-4  sm:mb-4">

                    <button className='bg-yellow-400 duration-500 text-black text-sm py-3 cursor-pointer flex gap-2 items-center rounded-full font-medium hover:bg-yellow-500 px-50' type="submit">
                        Sign In
                    </button>
                </div>
            </form>


        </div>
    )
}
