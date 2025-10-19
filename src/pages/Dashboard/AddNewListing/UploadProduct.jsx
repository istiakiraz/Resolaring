import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import PrimaryButton from '../../../common/PrimaryButton'
import { GoBell, GoPlusCircle } from "react-icons/go";
import { FcBusinessman } from 'react-icons/fc';

export default function UploadProduct() {

  return (
    <div className="w-11/12 mx-auto">


 {/* top bar */}
        <nav className='flex flex-col lg:flex-row  items-start justify-between' >
            <h2 className='text-2xl lg:text-3xl mb-2 lg:mb-0 font-bold' >Add New Listing</h2>
            <div className='flex flex-wrap items-center gap-3' >
                
                <GoBell size={25} />

                <div className='flex items-center gap-2' >
                    <div className='p-2 rounded-full w-fit bg-gray-200' ><FcBusinessman size={30} /></div>
                    <span>
                        <h6 className='font-bold' >John kal</h6>
                        <p className='text-gray-400' >Seller</p>
                    </span>
                </div>
            </div>
        </nav>



      {/* Upload Media */}
      <section className="py-10">
        <h2 className="font-semibold text-lg mb-3">Upload Media</h2>

  <div
      className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center bg-gray-50"
    >
      {/* Hidden file input */}
      <input
        type="file"
        id="file-upload"
        multiple
        accept="image/*"
        className="hidden"
        
      />

      
      <label htmlFor="file-upload">
        <Button
          type="button"
          className="bg-accent rounded-full cursor-pointer text-white"
          asChild={false}
        >
          Select Photos
        </Button>
      </label>

      <p className="text-gray-500 text-sm mt-2">or drag photos here</p>

      
    </div>

      </section>

      {/* Description */}
      <section>
        <h2 className="font-semibold text-lg mb-3">Description</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title:</label>
            <Input className='bg-gray-100 h-12' placeholder="Choose" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description:
            </label>
            <Textarea className='bg-gray-100 h-20' placeholder="Choose" rows={4} />
          </div>

          <div className="grid md:grid-cols-3 mb-4 gap-4">
            <div >
              <label className="block text-sm font-medium mb-1">
                Brand Name
              </label>
              <Select >
                <SelectTrigger className='min-w-full bg-gray-100' >
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="lg">LG</SelectItem>
                  <SelectItem value="toshiba">Toshiba</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Specifications
              </label>
              <Input placeholder="Model name" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Condition
              </label>
              <Select>
                <SelectTrigger className='min-w-full bg-gray-100'>
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section>
        <h2 className="font-semibold text-lg mb-3">Pricing Options</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price:</label>
            <Input className='bg-gray-100 h-12' placeholder="Price" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Discounts: <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <Input className='bg-gray-100 h-12' placeholder="Price" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Discount percentage
            </label>
            <Input className='bg-gray-100 h-12' placeholder="%" />
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section>
        <h2 className="font-semibold text-lg my-6">Category Selection</h2>
        <div>
          <label className="block text-sm font-medium mb-1">
            Categorize products:
          </label>
          <Select>
            <SelectTrigger className='w-full min-h-12 bg-gray-100'>
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solar">Solar Products</SelectItem>
              <SelectItem value="inverter">Inverters</SelectItem>
              <SelectItem value="battery">Batteries</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <Button className="bg-accent rounded-full cursor-pointer text-white hover:bg-slate-800">
          Submit Product
        </Button>
      </div>
    </div>
  );
}
