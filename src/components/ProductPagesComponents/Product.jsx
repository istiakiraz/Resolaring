


import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"; 

export default function Product() {
  const allProducts = [
    {
      id: 1,
      title: "JA Solar 200W",
      price: "55,00 €",
      rating: 4.5,
      reviews: 158,
      image: "https://i.ibb.co.com/y9dyhH7/image.png",
      discount: "-15% Discount",
      author: "John Doe",
      manufacturer: "Canadian Solar",
      type: "Polycrystalline",
    },
    {
      id: 2,
      title: "JA Solar 250W",
      price: "65,00 €",
      rating: 4.7,
      reviews: 210,
      image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
      discount: "-10% Discount",
      author: "John Doe",
      manufacturer: "Trina Solar",
      type: "Monocrystalline",
    },
    {
      id: 3,
      title: "JA Solar 180W",
      price: "45,00 €",
      rating: 4.3,
      reviews: 134,
      image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
      discount: "-20% Discount",
      author: "John Doe",
      manufacturer: "LONGi Solar",
      type: "Polycrystalline",
    },
    {
      id: 4,
      title: "JA Solar 220W",
      price: "58,00 €",
      rating: 4.6,
      reviews: 176,
      image: "https://i.ibb.co.com/y9dyhH7/image.png",
      author: "John Doe",
      manufacturer: "JA Solar",
      type: "Monocrystalline",
    },
    {
      id: 5,
      title: "JA Solar 300W",
      price: "75,00 €",
      rating: 4.8,
      reviews: 250,
      image: "https://i.ibb.co.com/bg08cCWd/image-2.png",
      discount: "-5% Discount",
      author: "John Doe",
      manufacturer: "Canadian Solar",
      type: "Thin Film",
    },
    {
      id: 6,
      title: "JA Solar 150W",
      price: "20,00 €",
      rating: 4.2,
      reviews: 120,
      image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
      author: "John Doe",
      manufacturer: "Trina Solar",
      type: "Thin Film",
    },
    {
      id: 7,
      title: "FF Solar 150W",
      price: "90,00 €",
      rating: 4.2,
      reviews: 120,
      image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
      author: "John Doe",
      manufacturer: "Trina Solar",
      type: "Thin Film",
    },
    {
      id: 8,
      title: "JA Solar 150W",
      price: "70,00 €",
      rating: 4.2,
      reviews: 120,
      image: "https://i.ibb.co.com/nqHHdhQZ/image-1.png",
      author: "John Doe",
      manufacturer: "Trina Solar",
      type: "Thin Film",
    },
  ];

  const manufacturers = ["Canadian Solar", "Trina Solar", "LONGi Solar", "JA Solar"];
  const productTypes = ["Monocrystalline", "Polycrystalline", "Thin Film"];

  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ handle checkbox change
  const handleCheckboxChange = (value, setter, selectedArray) => {
    if (selectedArray.includes(value)) {
      setter(selectedArray.filter((item) => item !== value));
    } else {
      setter([...selectedArray, value]);
    }
  };

  // ✅ filter logic
  const filteredProducts = allProducts.filter((product) => {
    const matchManufacturer =
      selectedManufacturers.length === 0 || selectedManufacturers.includes(product.manufacturer);
    const matchType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());
    return matchManufacturer && matchType && matchSearch;
  });

  return (
    <section className="2xl:max-w-9/12 max-w-11/12 mx-auto py-20">
      {/* 🔍 Search Bar */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Your market for solar panels</h2>
        <Input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-96 border h-14 px-8 bg-gray-100 rounded-full  focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="flex items-start justify-between gap-10">
        {/* ✅ Sidebar Filters */}
        <div className="space-y-10 sticky top-30 z-40">
          {/* Manufacturer Filter */}
          <div>
            <h6 className="font-bold text-2xl border-b border-gray-200 w-fit pb-2">
              Manufacturer By
            </h6>
            <div className="px-4 mt-3 space-y-3">
              {manufacturers.map((m) => (
                <div key={m} className="flex items-center gap-3">
                  <Checkbox
                    id={m}
                    checked={selectedManufacturers.includes(m)}
                    onCheckedChange={() =>
                      handleCheckboxChange(m, setSelectedManufacturers, selectedManufacturers)
                    }
                  />
                  <Label htmlFor={m} className="text-gray-700 cursor-pointer">
                    {m}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Product Type Filter */}
          <div>
            <h6 className="font-bold text-2xl border-b border-gray-200 w-fit pb-2">Filter by</h6>
            <p className="font-bold px-4 mt-2">Product Type</p>
            <div className="px-4 mt-3 space-y-3">
              {productTypes.map((type) => (
                <div key={type} className="flex items-center gap-3">
                  <Checkbox
                    id={type}
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={() =>
                      handleCheckboxChange(type, setSelectedTypes, selectedTypes)
                    }
                  />
                  <Label htmlFor={type} className="text-gray-700 cursor-pointer">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* price filter */}

          <div>

            <h6 className="font-bold text-2xl border-b border-gray-200 w-fit pb-2">Price Range</h6>
            <p className="text-gray-700 mt-2"  >Price: $100 - $650,000</p>

          </div>
        </div>

        {/* ✅ Product Cards */}
        <div className="flex-1">
          <p className="mb-6 text-gray-500">{filteredProducts.length} products found</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow pb-4">
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
                  <span className="ml-auto text-yellow-500">
                    ★ <span className="text-black">{product.rating}</span>{" "}
                    <span className="text-gray-500">({product.reviews})</span>
                  </span>
                </div>
                <h3 className="font-semibold text-2xl px-4 mt-2">{product.title}</h3>
                <div className="flex items-center px-4 justify-between">
                  <span>
                    <p className="font-light text-sm text-gray-500 mt-2">Tax excluded</p>
                    <p className="text-gray-800 text-2xl font-bold">{product.price}</p>
                  </span>
                  <button className="mt-3 border border-black rounded-full py-2 px-3 text-sm font-medium hover:bg-secondary hover:border-secondary cursor-pointer duration-500">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
