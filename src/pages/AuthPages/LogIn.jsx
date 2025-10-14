import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router';
import SocialLog from '../../common/SocialLog';


export default function LogIn() {

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

        if (data.email && data.password) {
            navigate("/");
        }
    }

   

    useEffect(() => {
        if (errors.email) {
            setFocus("email");
        }
    }, [errors, setFocus]);




    return (
        <div className='space-y-3  items-center'>

            <h1 className='text-5xl mb-2 font-semibold'>Welcome back!</h1>
            <p className='text-gray-500 ' >Enter your Credentials to access your account</p>

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

                        {/* {errors.email?.type === "required" && (
                            <p className="text-red-700">Email is required</p>
                        )} */}

                    </div>

                    {/* pass */}
                    <div className="mb-4 relative">
                        <div className='flex justify-between mb-2 items-center'>
                            <label className='text-sm'>Password*</label>
                            <Link to='/auth/forgot-pass'>
                            <div
                                className="link text-sm text-red-700  underline cursor-pointer hover:no-underline "
                            >
                                Forgot password?
                            </div>
                            </Link>
                        </div>
                        <input
                            placeholder="Password"
                            {...register("password", { required: true })}
                            type={showPass ? "text" : "password"}
                            className="pl-10 flex-grow w-full h-12 px-4 transition duration-200 bg-gray-100 border border-gray-300 rounded-xl appearance-none focus:border-deep-purple-accent-400 focus:outline-secondary focus:shadow-outline"
                            name="password"
                        />

                        {/* {errors.password?.type === "required" && (
                            <p className="text-red-700">password is required</p>
                        )} */}

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
                                    Remember Letter
                                </span>
                            </label>

                        </div>

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

            <SocialLog></SocialLog>

            <p className='text-center mt-2'>Don’t have an account?  <Link to='/auth/sign-up' ><span className='text-red-700'>Sign Up</span></Link></p>

        </div>
    )
}
