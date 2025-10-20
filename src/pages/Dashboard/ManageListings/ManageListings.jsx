import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { BsThreeDotsVertical } from 'react-icons/bs';

import { GoBell, GoPlusCircle } from "react-icons/go";
import { FcBusinessman } from 'react-icons/fc';
import PrimaryButton from '../../../common/PrimaryButton';

export default function ManageListings() {

     const data = [
 {
    id: 1,
    image: "https://i.ibb.co.com/y9dyhH7/image.png",
    title: "JA Solar 200W Panel",
    price: 5500,
    status: "Active",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
    title: "Growatt 3kW Inverter",
    price: 18500,
    status: "Pending",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
    title: "Eco Battery 150Ah",
    price: 12500,
    status: "Active",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/y9dyhH7/image.png",
    title: "MPPT Charge Controller 60A",
    price: 7200,
    status: "Rejected",
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
    title: "Solar DC Fan 16-inch",
    price: 3200,
    status: "Rejected",
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
    title: "All-in-One Solar Street Light 100W",
    price: 9800,
    status: "Pending",
  },
  {
    id: 7,
    image: "https://i.ibb.co.com/y9dyhH7/image.png",
    title: "DC Solar Water Pump 1HP",
    price: 25500,
    status: "Active",
  },
  {
    id: 8,
    image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
    title: "SMA 5kW Hybrid Inverter",
    price: 37500,
    status: "Rejected",
  },
  {
    id: 9,
    image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
    title: "Solar Home System 300W Kit",
    price: 14500,
    status: "Active",
  },
  {
    id: 10,
    image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
    title: "DC Solar Cable (10m Roll)",
    price: 1200,
    status: "Active",
  },
];

 const columns = [
 
    {
      header: "Product Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <img
            src={row.original.image}
            alt="product"
            className="w-26 h-16 rounded-xl"
          />
        </div>
      ),
    },
    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "Price",
      accessorKey:  "price",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ getValue }) => {
        const value = getValue();
        let colorClass = "";

        if (value === "Pending") colorClass = "text-white py-2 border-none  px-4 bg-secondary ";
        else if (value === "Active") colorClass = "text-white py-2 border-none px-4 bg-green-600";
        else if (value === "Rejected") colorClass = "text-white py-2 border-none px-4 bg-red-600";

        return (
          <span
            className={`px-3 py-1 border rounded-full text-sm font-medium ${colorClass}`}
          >
            {value}
          </span>
        );
      },
    },
    {
      header: "Action",
      cell: () => (
        <button className=" hover:underline"><BsThreeDotsVertical size={25} /></button>
      ),
    },
  ];

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });


  return (
    <div className='md:w-11/12 mx-auto'>

         {/* top bar */}
                <nav className='flex sticky top-0 bg-white py-5 -mt-14 items-center justify-end gap-5 lg:justify-between' >
                    <h2 className='md:text-2xl text-xl lg:text-3xl w-fit mb-2 lg:mb-0 font-bold' >Manage Listings</h2>
                    <div className='flex   items-center lg:items-center gap-3' >
                        <input placeholder='Search for product' className=' px-4 py-2 hidden xl:block lg:w-96 rounded-full border bg-gray-100 border-gray-200' type="text" name="" id="" />
                        <PrimaryButton className=' hidden md:flex w-fit' icon={GoPlusCircle} >
                            Add Product
                        </PrimaryButton>
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


         <div className='py-10' >
              <h2 className="text-2xl font-semibold mb-4">Listings</h2>
              <div className="overflow-x-auto rounded-lg ">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-900 text-white">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th key={header.id} className="px-4 py-3 font-medium">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {table.getRowModel().rows.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} className="px-4 py-3">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  )
}
