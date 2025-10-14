import React from 'react'
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from 'react-icons/fa6';

export default function SocialLog() {
  return (
    <div className='flex flex-col justify-center' >
        <span className='flex items-center  w-50 gap-2 '>
            <Separator /> Or <Separator />
        </span>

        <div className='mt-4 flex items-center gap-5'>
                <button className='rounded-full border hover:bg-amber-300 cursor-pointer duration-300 ease-in-out border-gray-300 px-8 py-4 flex items-center gap-2'>
                  <FcGoogle size={25} />  Sign in with Google
                </button>
                <button className='rounded-full border hover:bg-amber-300 cursor-pointer duration-300 ease-in-out border-gray-300 px-8 py-4 flex items-center gap-2'>
                  <FaApple size={25} />  Sign in with Apple
                </button>
            </div>
    </div>
  )
}
