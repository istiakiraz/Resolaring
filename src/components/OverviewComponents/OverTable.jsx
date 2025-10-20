import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const OverTable = () => {
  const data = [
  {
    id: "#10001",
    buyer: "Johnson Doe",
    product: "Solar Panel",
    date: "31/12/24",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "#10002",
    buyer: "Johnson Doe",
    product: "Inverter",
    date: "31/12/24",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "#10003",
    buyer: "Johnson Doe",
    product: "Solar Panel",
    date: "31/12/24",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: "#10004",
    buyer: "Johnson Doe",
    product: "Solar Panel",
    date: "31/12/24",
    status: "Shipped",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: "#10005",
    buyer: "Johnson Doe",
    product: "Inverter",
    date: "31/12/24",
    status: "Shipped",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: "#10006",
    buyer: "Johnson Doe",
    product: "Solar Panel",
    date: "31/12/24",
    status: "Shipped",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
  {
    id: "#10007",
    buyer: "Johnson Doe",
    product: "Solar Panel",
    date: "31/12/24",
    status: "Completed",
    avatar: "https://i.pravatar.cc/40?img=7",
  },
  {
    id: "#10008",
    buyer: "Johnson Doe",
    product: "Solar Panel",
    date: "31/12/24",
    status: "Completed",
    avatar: "https://i.pravatar.cc/40?img=8",
  },
  {
    id: "#10009",
    buyer: "Johnson Doe",
    product: "Solar Panel",
    date: "31/12/24",
    status: "Completed",
    avatar: "https://i.pravatar.cc/40?img=9",
  },
  {
    id: "#10010",
    buyer: "Johnson Doe",
    product: "Inverter",
    date: "31/12/24",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=10",
  },
  {
    id: "#10011",
    buyer: "Johnson Doe",
    product: "Solar Panel",
    date: "31/12/24",
    status: "Shipped",
    avatar: "https://i.pravatar.cc/40?img=11",
  },
  {
    id: "#10012",
    buyer: "Johnson Doe",
    product: "Solar Panel",
    date: "31/12/24",
    status: "Completed",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
];


  const columns = [
    {
      header: "Order ID",
      accessorKey: "id",
    },
    {
      header: "Buyer Name",
      accessorKey: "buyer",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <img
            src={row.original.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span>{row.original.buyer}</span>
        </div>
      ),
    },
    {
      header: "Product Name",
      accessorKey: "product",
    },
    {
      header: "Order Date",
      accessorKey: "date",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ getValue }) => {
        const value = getValue();
        let colorClass = "";

        if (value === "Pending") colorClass = "text-yellow-500 border-yellow-400 bg-yellow-50";
        else if (value === "Shipped") colorClass = "text-orange-500 border-orange-400 bg-orange-50";
        else if (value === "Completed") colorClass = "text-green-500 border-green-400 bg-green-50";

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
        <button className="text-red-500 hover:underline">View details</button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div >
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <div className="overflow-x-auto rounded-lg  border-gray-100 ">
        <table className="min-w-[800px] w-full text-left text-sm">
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
  );
};

export default OverTable;
