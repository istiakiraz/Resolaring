import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGooglePay } from "react-icons/fa";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

export default function Checkout() {
  return (

    <div className="min-h-screen max-w-11/12 2xl:max-w-9/12 mx-auto  justify-center py-20 ">

        <div className="flex items-center mb-8 justify-between" >
             <h2 className="text-2xl font-semibold mb-2">
            Resolaring.ES <span className="font-thin" >CHECKOUT</span>
          </h2>
         <Link to='/' >
          <button className="underline hover:underline-offset-0 cursor-pointer duration-300 ease-in-out font-semibold">Continue Browsing</button>
         </Link>
        </div>

      <div className="w-full  grid md:grid-cols-3 items-start gap-8">
        
        {/* left section */}
        <div className="md:col-span-2 bg-white ">
         

       
          <div className="border rounded-xl p-6 mb-6 text-center">
            <h3 className="text-sm text-gray-600 mb-3">Express checkout</h3>
           <Button
                       variant="outline"
                       className="w-full border-gray-300 bg-black text-white duration-300 ease-in-out cursor-pointer py-2 flex items-center justify-center gap-2 rounded-full"
                     >
                       <FcGoogle size={24} />
                       Pay
                     </Button>
          </div>

      
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* delivery details */}
          <div className="border-b pb-4 mb-6">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Delivery details</h3>
             <Link>
              <button className="underline hover:-underline-offset-0  font-semibold cursor-pointer">Change</button>
             </Link>
            </div>
            <p className="text-gray-700 mt-2">Abu Bakkar Siddik</p>
            <p className="text-gray-500 text-sm">demotest@gmail.com</p>
            <p className="text-gray-500 text-sm">
              Mohakhali, Dhaka 1229, Bangladesh
            </p>
            <p className="text-gray-500 text-sm">+44 20 0000 0000</p>
          </div>

         
          <div className="border-b pb-4 mb-6">
            <h3 className="font-semibold text-lg mb-2">Delivery method</h3>
            <div className="flex justify-between text-gray-600">
              <span>Free Shipping</span>
              <span className="font-medium">Free</span>
            </div>
          </div>

          {/* billing address */}
          <div className="border-b pb-4 mb-6">
            <h3 className="font-semibold text-lg mb-2">Billing address</h3>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                
               
                className="w-4 h-4 accent-secondary cursor-pointer duration-300 ease-in-out "
              />
              <span className="text-gray-600 text-sm">
                Same as delivery address
              </span>
            </div>
          </div>

          {/* review */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Review & place order</h3>
            <p className="text-gray-500 text-sm mb-4">
              Review your details and order before you’re ready.
            </p>
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-6 rounded-xl text-lg">
              Place Order & Pay
            </Button>
          </div>
        </div>

        {/* right side  */}
        <div className="sticky top-30">
             <div className="flex items-center  mb-2 justify-between">
                <h3 className="font-semibold  ">Order Summary (2)</h3>
                <button className=" underline hover:underline-offset-0 cursor-pointer duration-300 ease-in-out font-semibold ">Edit Cart</button>
             </div>
             <Card className="bg-gray-50 rounded-2xl shadow-sm h-fit">
          <CardContent >
            

            {/* product list */}
            <div className="space-y-3 mb-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center bg-white px-4 py-6 rounded justify-between">
                  <div className="flex  items-center gap-3">
                    <img
                      src="https://i.ibb.co.com/y9dyhH7/image.png"
                      alt="JA Solar"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">JA Solar 540W</p>
                      <p className="text-xs text-gray-500">x1</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold">$60</span>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter a promo code"
                className="border rounded-lg w-full p-2 text-sm"
              />
            </div>

            {/* Summary */}
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$180</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Sales Tax</span>
                <span>$18.0</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              🔒 Secure Checkout
            </p>
          </CardContent>
        </Card>
        </div>
        
      </div>
    </div>
  );
}
