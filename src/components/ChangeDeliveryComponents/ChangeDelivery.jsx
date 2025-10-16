import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRightLong } from 'react-icons/fa6';
import PrimaryButton from '../../common/PrimaryButton';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
;

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function ChangeDelivery() {

    const inputStyles = " bg-gray-100 border h-14  placeholder:text-slate-400 focus:outline-secondary  rounded-md";

    return (
        <div>

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

                        {/* divider */}
                        <div className="flex items-center mb-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="px-4 text-gray-500 text-sm">Or</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>



                        {/* delivery details */}
                        <div className=" pb-4 mb-6">

                            <h3 className="font-semibold text-lg">Delivery details</h3>

                            <form className='mt-8' onSubmit={(e) => e.preventDefault()}>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-8">
                                    <div>
                                        <Label htmlFor="Fast name" className=" mb-2 text-gray-500 block">Fast name*</Label>
                                        <Input
                                            type="text"
                                            id="fastName"

                                            className={inputStyles}

                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="Last name" className=" mb-2 text-gray-500 block">Last name*</Label>
                                        <Input
                                            type="text"
                                            id="lastName"

                                            className={inputStyles}

                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="Phone Number " className=" mb-2 text-gray-500 block">Phone Number *</Label>
                                        <Input
                                            type="number"
                                            id="number"

                                            className={inputStyles}

                                        />
                                    </div>

                                    <div>

                                        <Label htmlFor="Country" className=" mb-2 text-gray-500 block">Country/Region *</Label>

                                        <Select>
                                            <SelectTrigger className='w-full bg-gray-100 min-h-14'>
                                                <SelectValue placeholder="United States" />
                                            </SelectTrigger>
                                            <SelectContent className='bg-gray-100 ' >
                                                <SelectItem value="Product 1">United States</SelectItem>
                                                <SelectItem value="Product 2">Bangladesh</SelectItem>
                                                <SelectItem value="Product 3">Nepal</SelectItem>
                                            </SelectContent>
                                        </Select>

                                    </div>
                                    <div>
                                        <Label htmlFor="Address" className=" mb-2 text-gray-500 block">Address *</Label>
                                        <Input
                                            type="text"
                                            id="address"
                                            className={inputStyles}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="Zip/Postal" className=" mb-2 text-gray-500 block">Zip/Postal code *</Label>
                                        <Input
                                            type="number"
                                            id="Zip"

                                            className={inputStyles}

                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}

                                <div className="flex gap-3 items-center justify-center">


                                    <Button className=' text-black rounded-full py-5  px-4 border  border-gray-500 bg-white text-center' >
                                        Use Different Address
                                    </Button>
                                    <PrimaryButton type="submit" >
                                        Save and Continue
                                    </PrimaryButton>

                                </div>
                            </form>



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



        </div>
    )
}
