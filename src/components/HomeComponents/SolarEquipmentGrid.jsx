import React from "react";
import PrimaryButton from "../../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    id: 1,
    title: "JA Solar 200W",
    price: "55,00 €",
    rating: 4.5,
    reviews: 158,
    image: "https://i.ibb.co.com/y9dyhH7/image.png",
    discount: "-15% Discount",
    author: "John Doe"
  },
  {
    id: 2,
    title: "JA Solar 250W",
    price: "65,00 €",
    rating: 4.7,
    reviews: 210,
    image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
    discount: "-10% Discount",
    author: "John Doe"
  },
  {
    id: 3,
    title: "JA Solar 180W",
    price: "45,00 €",
    rating: 4.3,
    reviews: 134,
    image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
    discount: "-20% Discount",
    author: "John Doe"
  },
  {
    id: 4,
    title: "JA Solar 220W",
    price: "58,00 €",
    rating: 4.6,
    reviews: 176,
    image: "https://i.ibb.co.com/y9dyhH7/image.png",
    author: "John Doe"
  },
  {
    id: 5,
    title: "JA Solar 300W",
    price: "75,00 €",
    rating: 4.8,
    reviews: 250,
    image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
    discount: "-5% Discount",
    author: "John Doe"
  },
  {
    id: 6,
    title: "JA Solar 150W",
    price: "40,00 €",
    rating: 4.2,
    reviews: 120,
    image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
    author: "John Doe"
  },
  {
    id: 7,
    title: "JA Solar 275W",
    price: "68,00 €",
    rating: 4.6,
    reviews: 189,
    image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
    discount: "-12% Discount",
    author: "John Doe"
  },
  {
    id: 8,
    title: "JA Solar 320W",
    price: "85,00 €",
    rating: 4.9,
    reviews: 310,
    image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
    author: "John Doe"
  }
];


export default function SolarEquipmentGrid() {
  return (
<div className="bg-primary-foreground py-10">

        <section className="py-10 2xl:max-w-9/12 max-w-11/12 mx-auto">
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
            <button className="mt-3  border border-black rounded-full py-2 px-2 text-sm font-medium hover:bg-secondary hover:border-secondary cursor-pointer duration-500 ">View Details</button>
           </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center  mt-8">
        <PrimaryButton to="/products" icon={FaArrowRightLong}>
            View all products 
        </PrimaryButton>
      </div>
    </section>
</div>
  );
}
