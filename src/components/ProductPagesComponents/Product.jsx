import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PrimaryButton from "../../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";
import bgImg from '../svg/CtaBg-product.svg'
import { Link } from "react-router";

export default function Product({allProducts}) {
   


    const manufacturers = ["Canadian Solar", "Trina Solar", "LONGi Solar", "JA Solar"];
    const productTypes = ["Monocrystalline", "Polycrystalline", "Thin Film"];

    const [selectedManufacturers, setSelectedManufacturers] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [search, setSearch] = useState("");

    //checkbox
    const handleCheckboxChange = (value, setter, selectedArray) => {
        if (selectedArray.includes(value)) {
            setter(selectedArray.filter((item) => item !== value));
        } else {
            setter([...selectedArray, value]);
        }
    };

    // filter
    const filteredProducts = allProducts.filter((product) => {
        const matchManufacturer =
            selectedManufacturers.length === 0 || selectedManufacturers.includes(product.manufacturer);
        const matchType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
        const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());
        return matchManufacturer && matchType && matchSearch;
    });

    return (
        <section className="2xl:max-w-9/12 max-w-11/12 mx-auto py-20">
            {/* search */}
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
                {/* sidebar */}
                <div className="space-y-10 sticky top-30 z-40">
                    {/* manufacturer */}
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

                    {/* product type filter */}
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

                {/* product cards */}
                <div className="flex-1">
                    <p className="mb-6 text-gray-500">{filteredProducts.length} products found</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl pb-4">
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
                                    <Link to={`/product-details/${product.id}`} >
                                    <button className="mt-3 border border-black rounded-full py-2 px-3 text-sm font-medium hover:bg-secondary hover:border-secondary cursor-pointer duration-500">
                                        View Details
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <PrimaryButton to="/all-products" icon={FaArrowRightLong} className="w-fit mt-10 ">
                            View all products
                        </PrimaryButton>
                    </div>

                </div>
            </div>

            <div className="bg-yellow-100 rounded-2xl text-center mt-20 py-20 flex flex-col bg-cover bg-center justify-center items-center p-8"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <h3 className="text-5xl w-6/12 mx-auto text-white font-semibold mb-4">
                    Join the community and post your panels
                </h3>
                <p className="text-white my-4">Subscribe Our Newsletter For Latest Updates</p>

                <Input
                    type="text"
                    placeholder="Enter Your Email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-96 border h-14 px-8 bg-gray-100 rounded-full  focus:ring-2 focus:ring-yellow-400"
                />

            </div>


        </section>
    );
}
