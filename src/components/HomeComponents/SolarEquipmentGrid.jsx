import React from "react";
import PrimaryButton from "../../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

import circleSvg from '../svg/circle-svg.svg'
import bgSvg from '../svg/home-bg-svg.svg'



export default function SolarEquipmentGrid({products}) {

  return (
<div className="bg-primary-foreground overflow-x-hidden relative py-10">

    {/* left side bg */}
  <img className="absolute top-20  -left-150 z-1" src={circleSvg} alt="circle svg" />
  <img className="absolute top-120 left-5 z-1" src={bgSvg} alt="bg svg" />
  
  {/* right side */}
  <img className="absolute -top-150 -right-150 z-1" src={circleSvg} alt="circle svg" />
  <img className="absolute top-10 right-10 z-1" src={bgSvg} alt="bg svg" />

        <section className="py-10 z-10 relative 2xl:max-w-9/12 max-w-11/12 mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Featured Solar Equipment</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow  pb-4">
            <div className="relative">
              <img src={product.image} alt={product.title} className="w-full rounded-t-xl" />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
            </div>
            <div className="mt-4 flex items-center px-4 gap-2 text-sm text-gray-600">
              <span>{product.author}</span>
              <span className="ml-auto text-yellow-500">★ <span className="text-black" >{product.rating}</span> <span className="text-gray-500">({product.reviews})</span></span>
            </div>
            <h3 className="font-semibold text-2xl px-4 mt-2">{product.title}</h3>
           <div className="flex items-center px-4 justify-between">
            <span > <p className="font-light text-sm text-gray-500 mt-2">Tax excluded</p>
            <p className="text-gray-800 text-2xl font-bold">{product.price}</p></span>
           <Link to={`/product-details/${product.id}`}>
            <button className="mt-3  border border-black rounded-full py-2 px-2 text-sm font-medium hover:bg-secondary hover:border-secondary cursor-pointer duration-500 ">View Details</button>
           </Link>
           </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center  mt-8">
        <PrimaryButton to="/marketplace" icon={FaArrowRightLong}>
            View all products 
        </PrimaryButton>
      </div>
    </section>
</div>
  );
}
