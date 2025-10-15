import React, { useState } from "react";
import { FaPlus, FaMinus, FaCartShopping } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { CiShoppingTag } from "react-icons/ci";
import { Link } from "react-router";


export default function CartContent() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "JA Solar 360w",
      price: 60,
      image: "https://i.ibb.co.com/y9dyhH7/image.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "JA Solar 360w",
      price: 60,
      image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
      quantity: 1,
    },
    {
      id: 3,
      title: "JA Solar 360w",
      price: 60,
      image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
      quantity: 1,
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

// summary
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-11/12 2xl:max-w-9/12 mx-auto py-20 md:px-8">
      <div className="grid md:grid-cols-3 gap-10">

        {/* left side  */}
        <div className="md:col-span-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="pb-3">My Cart</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b text-gray-800 text-sm md:text-base"
                >
            
                  <td className="py-4 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <span className="font-medium">{item.title}</span>
                  </td>

                  <td className="py-4">${item.price.toFixed(2)}</td>

            
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="p-1 border rounded-full hover:bg-gray-100"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="p-1 border rounded-full hover:bg-gray-100"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  </td>

                  <td className="py-4">
                    ${Number(item.price * item.quantity).toFixed(2)}
                  </td>

                  {/* delete btn */}
                  <td className="py-4">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

         
          <div className="mt-6 flex flex-col md:flex-row gap-3 items-end justify-between">
            <div className="flex flex-col" >
                 <p className="underline flex gap-2 items-center mb-2"> <CiShoppingTag size={25} /> Enter a promo code</p>
            <div className="flex items-center border rounded-full overflow-hidden w-full md:w-auto">
              <Input
                placeholder="Promo code"
                className="rounded-none border-none px-4 py-2 w-56"
              />
              <Button className="rounded-none cursor-pointer bg-[#b14d2a] hover:bg-[#933f23] text-white px-5 py-2">
                Apply
              </Button>
            </div>
            </div>
           
            <Button
           
              className=" duration-300 ease-in-out cursor-pointer  bg-[#b14d2a] hover:text-white flex items-center gap-2"
            >
              <span>📝</span> Add a note
            </Button>
          </div>
        </div>

        {/* right side */}
        
       <div>
             <h3 className="font-semibold mb-4 text-gray-800">Order Summary</h3>
         <div className="bg-gray-50 p-5 h-fit rounded-xl border">

         

          <div className="flex justify-between bg-white py-5 px-2 rounded-l text-sm mb-3">
            <span className="text-gray-500">Shipping</span>
            <span>Bangladesh</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-5">
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <Link to='/checkout'>
          <Button className="w-full bg-yellow-400 cursor-pointer hover:bg-yellow-500 flex gap-2 items-center font-semibold text-black py-2 rounded-full mb-3">
           <FaCartShopping /> Checkout
          </Button>
          </Link>

          <Button
            variant="outline"
            className="w-full border-gray-300 bg-black text-white duration-300 ease-in-out cursor-pointer py-2 flex items-center justify-center gap-2 rounded-full"
          >
            <FcGoogle size={24} />
            Pay
          </Button>
          <p className="text-center text-xs text-gray-500 mt-3">
            🔒 Secure Checkout
          </p>
        </div>
       </div>
      </div>
    </div>
  );
}
