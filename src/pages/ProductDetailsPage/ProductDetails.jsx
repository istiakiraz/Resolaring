import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import PrimaryButton from '../../common/PrimaryButton';
import { FaArrowRightLong, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import Cta from '../../components/HomeComponents/Cta';
import { IoLogoWhatsapp } from "react-icons/io";


export default function ProductDetails() {

    const data = useLoaderData();
     const { id } = useParams();

      const [product, setProduct] = useState({});

     useEffect(() => {
    const productDetails = data.find((singleProduct) => singleProduct.id == id);
    setProduct(productDetails);
  }, [data, id]);

  

  return (
   <section>
     <div className="max-w-11/12 2xl:max-w-9/12 mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/*  img */}
      <div className="space-y-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg shadow"
        />
        <div className="grid grid-cols-2 gap-4">
          <img src={product.image} alt="" className="rounded-lg shadow" />
          <img src={product.image} alt="" className="rounded-lg shadow" />
        </div>
      </div>

      {/* product details */}
      <div>
        <span className='flex justify-between items-center' >
            <p className="bg-[#bce2cb] text-black px-3 py-1 rounded inline-block text-sm mb-2">
          New
        </p>
        <p className='bg-gray-200 rounded text-sm px-2 py-1' >Product id: #{product.id}</p></span>
        <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>

        <div className="flex items-center space-x-3 mb-2">
          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm">
            {product.manufacturer}
          </span>
          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm">
            {product.type}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{product.details}</p>

        {/* price  */}
      <p className='mt-8 text-gray-600'>Excluding Sales Tax</p>
        <div className="text-2xl font-bold mb-4">
             <span className="line-through text-gray-400 mr-4">
            {(parseFloat(product.price) + 20).toFixed(2)} €
          </span>
          {product.price}{" "}
         
        </div>

        {/* quantity */}
        <div className="flex flex-col items-left w-fit space-x-4 mb-6">
            <p className='mb-2 text-gray-600'>Quantity</p>
          <select className="border px-3 py-2 rounded">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
         <PrimaryButton className='w-fit px-40' icon={FaArrowRightLong}>
            Add to Cart 
          </PrimaryButton>

        {/* Social Icons / Ratings */}
        <div className="flex mt-5 items-center *:size-6 *:hover:scale-110 *:cursor-pointer *:duration-300 space-x-2 text-gray-600">
          <FaFacebook color='#0a66c2' />
          <IoLogoWhatsapp color='lime' />
          <FaLinkedin color='#0a66c2' />

        </div>
      </div>
    </div>
    <Cta></Cta>
   </section>
  )
}
