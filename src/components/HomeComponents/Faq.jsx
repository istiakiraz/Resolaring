import React from 'react'
import frame1 from '../../assets/Img/1.png'
import frame2 from '../../assets/Img/2.png'
import frame3 from '../../assets/Img/3.png'
import frame4 from '../../assets/Img/4.png'
import svg1 from '../../assets/Img/svg1.png'
import svg2 from '../../assets/Img/svg2.png'
import svg3 from '../../assets/Img/svg3.png'
import svg4 from '../../assets/Img/svg4.png'
import bgSvg from '../svg/home-bg-svg-2.svg'


export default function Faq() {
  return (
    <section className='relative overflow-hidden '>

       <img className="absolute top-10  left-2 z-1" src={bgSvg} alt="bg svg" />
       <img className="absolute bottom-10  right-2 z-1" src={bgSvg} alt="bg svg" />

      <div className='2xl:max-w-9/12 max-w-11/12 mx-auto py-10 lg:py-20'>


      <h2 className="2xl:text-4xl text-2xl font-bold mb-6 text-center">Why Choose Resolaring?</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10'>

        <div
          className="bg-cover hover:scale-105 hover:shadow-xl duration-600 cursor-grab ease-in-out bg-center bg-no-repeat space-y-4 h-fit min-h-68 w-full p-8 rounded-xl"
          style={{ backgroundImage: `url(${frame1})` }}
        >
          <img src={svg1} alt="svg img" />
          <h5 className=" text-2xl font-bold">Circular economy of solar energy</h5>
          <p className=' text-sm text-gray-500' >Repurposing solar panels to reduce waste and maximize material reuse for a sustainable future.</p>
        </div>

        <div
          className="bg-cover bg-center hover:scale-105 hover:shadow-xl duration-600 cursor-grab ease-in-out bg-no-repeat space-y-4 h-fit min-h-68 w-full p-8 rounded-xl"
          style={{ backgroundImage: `url(${frame2})` }}
        >
          <img src={svg2} alt="svg img" />
          <h5 className=" text-2xl font-bold">Repairs and or recycling</h5>
          <p className=' text-sm text-gray-500' >We repair solar panels that can be reused, and those that cannot, we dismantle and recycle them in parts.</p>
        </div>

        <div
          className="bg-cover bg-center hover:scale-105 hover:shadow-xl duration-600 cursor-grab ease-in-out bg-no-repeat space-y-4 h-fit min-h-68 w-full p-6 rounded-xl"
          style={{ backgroundImage: `url(${frame3})` }}
        >
          <img src={svg3} alt="svg img" />
          <h5 className=" text-2xl font-bold">Warranty on installed panels</h5>
          <p className=' text-sm text-gray-500' >All solar panels we provide have passed prior inspections. We therefore guarantee the correct operation of each of the photovoltaic panels we install.</p>
        </div>

        <div
          className="bg-cover bg-center hover:scale-105 hover:shadow-xl duration-600 cursor-grab ease-in-out bg-no-repeat space-y-4 h-fit min-h-68 w-full p-6 rounded-xl"
          style={{ backgroundImage: `url(${frame4})` }}
        >
          <img src={svg4} alt="svg img" />
          <h5 className=" text-2xl font-bold">Installation and maintenance</h5>
          <p className=' text-sm text-gray-500' >Our installation and maintenance team guarantees optimal installation of the recycled panels and maintenance of the system in operation.</p>
        </div>

       
      </div>

    </div>
    </section>
  );
}
