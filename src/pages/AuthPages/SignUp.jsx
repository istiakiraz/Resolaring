import React, { useEffectEvent, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import SocialLog from '../../common/SocialLog';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function SignUp() {

    const [showPass, setShowPass] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);

        if (data.email && data.name && (data.password1 == data.password2)) {
            navigate("/");
        } else {
            alert('password are not same')
        }
    }


    return (
        <div className='space-y-3  items-center'>


            <form className='mt-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-1 sm:mb-2">
                    {/* name */}
                    <div className="mb-4 relative">
                        <label className='text-sm'>Name*</label>
                        <input
                            placeholder="Enter your name"
                            {...register("name", { required: true })}
                            type="text"
                            className={`pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border rounded-xl appearance-none
            ${errors.name ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
            focus:outline-secondary focus:shadow-outline`}
                            name="name"
                        />



                    </div>
                    {/* email */}
                    <div className="mb-4 relative">
                        <label className='text-sm'>Email*</label>
                        <input
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                            type="email"
                            className={`pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border rounded-xl appearance-none
            ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
            focus:outline-secondary focus:shadow-outline`}
                            name="email"
                        />


                    </div>

                    {/* pass 1 */}
                    <div className="mb-4 relative">
                        <div className='flex justify-between mb-2 items-center'>
                            <label className='text-sm'>Choose Password*</label>
                        </div>
                        <input
                            placeholder="Password"
                            {...register("password1", { required: true, pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/ })}
                            type={showPass ? "text" : "password"}
                            // className="pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border border-gray-300 rounded-xl appearance-none focus:border-deep-purple-accent-400 focus:outline-secondary focus:shadow-outline"
                            className={`pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border rounded-xl appearance-none
            ${errors.password1 ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
            focus:outline-secondary focus:shadow-outline`}
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
                            <label className='text-sm'>Confirm Password*</label>
                        </div>
                        <input
                            placeholder="Password"
                            {...register("password2", { required: true })}
                            type={showPass ? "text" : "password"}
                            className={`pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border rounded-xl appearance-none
            ${errors.password2 ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
            focus:outline-secondary focus:shadow-outline`}
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

                        {/* remember */}
                        <div className="flex items-center mt-4 justify-between">
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    name="remember_me"

                                    // onChange={handleChange}
                                    className="checkbox checkbox-sm"
                                />
                                <span className='text-sm'>
                                    I agree to the terms & policy
                                </span>
                            </label>

                        </div>
                    </div>
                </div>

                <div className="mt-4  sm:mb-4">

                    <button className='bg-yellow-400 duration-500 text-black text-sm py-3 cursor-pointer flex gap-2 items-center rounded-full font-medium hover:bg-yellow-500 px-50' type="submit">
                        Sign Up
                    </button>
                </div>
            </form>

            <SocialLog></SocialLog>

            <p className='text-center mt-2'>Don’t have an account?  <Link to='/auth/log-in' ><span className='text-red-700'>Sign In</span></Link></p>

        </div>
    )
}