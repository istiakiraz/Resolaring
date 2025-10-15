import React from 'react'
import { FaArrowRightLong, FaFacebookF, FaInstagram, FaLink, FaXTwitter } from 'react-icons/fa6'
import PrimaryButton from '../../common/PrimaryButton'
import { Link } from 'react-router'
import { FcBusinessman } from 'react-icons/fc'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaCloudUploadAlt } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"


export default function GalleryProduct({ products }) {
  return (
    <div className="  py-10">


      <section className="py-10 z-10 relative 2xl:max-w-9/12 max-w-11/12 mx-auto">

        <div className='flex items-center justify-between mb-6  ' >
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Anuncia els teus panells solars</h2>


          <Dialog>
            <DialogTrigger><button className='bg-[#B45C3D] px-4 py-2 rounded-full duration-300 ease-in-out cursor-pointer hover:bg-[#67483c] text-sm text-white' >Add Media</button></DialogTrigger>


            <DialogContent className="max-w-lg mx-auto p-6 rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-center">Upload Media</DialogTitle>
              </DialogHeader>

              <div className="mt-4">

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-[#b14d2a] text-white px-4 py-2 rounded-full flex items-center gap-2">
                        <FaCloudUploadAlt size={20} />
                        <span>Select Photos</span>
                      </div>
                      <p className="text-gray-500 text-sm">or drag photos here</p>
                    </div>
                    <input type="file" className="hidden"
                    />
                  </label>
                </div>

                <div className="mt-3">
                  <label className="block font-medium mb-1">Title:</label>
                  <input
                    type="text"
                    placeholder="Choose"
                    className="w-full border rounded-lg bg-gray-50 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>


                <div className="mt-3">
                  <label className="block font-medium mb-1">Description:</label>
                  <textarea
                    rows="3"
                    placeholder="Choose"
                    className="w-full border rounded-lg bg-gray-50 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
                  ></textarea>
                </div>


                <div className="mt-6 flex justify-center text-center">

                  <PrimaryButton className='w-fit' icon={FaArrowRightLong}>
                    Upload Now
                  </PrimaryButton>

                </div>
              </div>
            </DialogContent>
          </Dialog>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow  pb-4">
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-full rounded-t-xl" />
              </div>

              <div className='flex items-center px-4 mb-4 justify-between'>
                <div className="mt-4 flex items-center  gap-2  text-gray-600">
                  <span className='rounded-full p-1 bg-gray-400 ' >   <FcBusinessman size={30} /></span>
                  <span>{product.author}</span>
                </div>

                <span className=' text-center cursor-pointer   duration-300 ease-in-out' >

                  <Select>
                    <SelectTrigger >
                      <span  > <HiOutlineDotsVertical size={25} /></span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem >

                        <Dialog>
                          <DialogTrigger>Share</DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="text-center text-3xl" > Share</DialogTitle>
                              <DialogDescription className="flex items-center gap-8 *:text-black justify-center mt-2 *:size-8" >
                                <FaFacebookF />
                                <FaXTwitter />
                                <FaInstagram />
                                <FaLink />
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>

                      </SelectItem>

                      <SelectItem ><Dialog>
                        <DialogTrigger>Report</DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will permanently delete your account
                              and remove your data from our servers.
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      </SelectItem>
                    </SelectContent>
                  </Select>

                </span>

              </div>

              <h3 className="font-semibold text-2xl px-4 mt-2">{product.title}</h3>
              <p className='text-gray-500 px-4 text-sm line-clamp-3' >{product.details}</p>
              <div className="flex items-center px-4 justify-between">
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
  )
}
