import React from 'react'
import frame1 from '../../assets/Img/1.png'
import frame2 from '../../assets/Img/2.png'
import frame3 from '../../assets/Img/3.png'
import frame4 from '../../assets/Img/4.png'
import svg1 from '../../assets/Img/svg1.png'
import svg1 from '../../assets/Img/svg1.png'
import svg1 from '../../assets/Img/svg1.png'
import svg1 from '../../assets/Img/svg1.png'


export default function Faq() {
  return (
    <div className='2xl:max-w-9/12 max-w-11/12 mx-auto my-20'>

      <h2 className="text-4xl font-bold mb-6 text-center">Why Choose Resolaring?</h2>

      <div className='grid grid-cols-4 gap-10'>
        <div
          className="bg-cover bg-center bg-no-repeat h-64 w-full flex items-center justify-center rounded-xl"
          style={{ backgroundImage: `url(${frame1})` }}
        >
          <h1 className=" text-2xl font-bold">hello</h1>
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat h-64 w-full flex items-center justify-center rounded-xl"
          style={{ backgroundImage: `url(${frame1})` }}
        >
          <h1 className=" text-2xl font-bold">hello</h1>
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat h-64 w-full flex items-center justify-center rounded-xl"
          style={{ backgroundImage: `url(${frame1})` }}
        >
          <h1 className=" text-2xl font-bold">hello</h1>
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat h-64 w-full flex items-center justify-center rounded-xl"
          style={{ backgroundImage: `url(${frame1})` }}
        >
          <h1 className=" text-2xl font-bold">hello</h1>
        </div>
      </div>

    </div>
  );
}
