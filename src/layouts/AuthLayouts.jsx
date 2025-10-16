import React from 'react'
import { Outlet } from 'react-router'
import workImg from '../assets/Img/workImg.png'

export default function AuthLayouts() {
  return (
    <div className='flex flex-col py-10 items-center px-10 lg:flex-row lg:h-screen justify-center gap-10 '>

      <div>
          <Outlet></Outlet>
      </div>
        <img className='rounded-2xl h-7/12' src={workImg} alt="worker img" />
    </div>
  )
}
