import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import PrimaryButton from '../../common/PrimaryButton';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Cta from '../HomeComponents/Cta';


export default function AskQues() {

    const inputStyles = " bg-gray-100 border h-14 placeholder:text-slate-400 focus:outline-secondary  rounded-md";

    return (

        <section>
            <div className='2xl:max-w-9/12 max-w-11/12 mx-auto py-20' >
                <h2 className='font-semibold text-4xl' >Ask a Question about Product</h2>
                <p className='text-gray-500 mt-2' >Check out our availability and book the date and time that works for you</p>

                {/* form */}

                <form className='mt-8' onSubmit={(e) => e.preventDefault()}>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mb-8">
                        <div>
                            <Label htmlFor="name" className=" mb-2 block">Name*</Label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Name here"
                                className={inputStyles}
                            
                            />
                        </div>


                        <div>
                            <Label htmlFor="email" className=" mb-2 block">E-mail*</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email here"
                                className={inputStyles}
                            />
                        </div>

                        <div>

                            <Label htmlFor="telephone" className=" mb-2 block">Telephone*</Label>

                            <Select>
                                <SelectTrigger className='w-full bg-gray-100 min-h-14'>
                                    <SelectValue placeholder="Choose product" />
                                </SelectTrigger>
                                <SelectContent className='bg-gray-100 ' >
                                    <SelectItem value="Product 1">Product 1</SelectItem>
                                    <SelectItem value="Product 2">Product 2</SelectItem>
                                    <SelectItem value="Product 3">Product 3</SelectItem>
                                </SelectContent>
                            </Select>
                           
                        </div>
                    </div>

                    {/* Textarea */}
                    <div className="mb-8">
                        <Label htmlFor="message" className=" mb-2 block">Message*</Label>
                        <Textarea
                            id="message"
                            placeholder="Message here"
                            className={`${inputStyles} min-h-[100px]`}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <PrimaryButton type="submit" icon={FaArrowRightLong}>
                            Send Inquiry
                        </PrimaryButton>

                    </div>
                </form>


            </div>

            <Cta></Cta>
        </section>

    )
}
