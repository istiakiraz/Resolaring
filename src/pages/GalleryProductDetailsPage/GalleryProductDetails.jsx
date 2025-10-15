
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import PrimaryButton from "../../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import GalleryProDetailsHeader from "../../components/GalleryProductCompo/GalleryProDetailsHeader";
import Cta from "../../components/HomeComponents/Cta";

export default function GalleryProductDetails() {
  const data = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productDetails = data.find((singleProduct) => singleProduct.id == id);
    setProduct(productDetails);
  }, [data, id]);

  const [demoComment, setDemoComment] = useState("");

  const [comments, setComments] = useState([
    {
      user: "John Doe",
      text: "I like this panel! Can you give more info about performance?",
      time: "8m ago",
    },
    {
      user: "John Doe",
      text: "Does it support off-grid setup?",
      time: "12m ago",
    },
    {
      user: "John Doe",
      text: "Great price for the output!",
      time: "20m ago",
    },
  ]);

  // Handle new comment
  const handleSendComment = () => {
    if (!demoComment.trim()) return alert("Please type a comment first!");

    const newComment = {
      user: "user", 
      text: demoComment,
      time: "Just now",
    };

    setComments([newComment, ...comments]); // Add to top
    setDemoComment("");
  };


  if (!product) return <p>Loading...</p>;

  return (

   <section>

    <GalleryProDetailsHeader product={product} ></GalleryProDetailsHeader>



     <div className="max-w-11/12 2xl:max-w-9/12 mx-auto py-10 px-4">

      {/* title */}
      <h1 className="text-3xl font-semibold">{product.title}</h1>
      <div className="flex items-center gap-3 text-gray-500 text-sm mt-2">
        <span>👤 {product.author}</span>
        <span>•</span>
        <span>📅 20 Nov, 2024</span>
        <span>•</span>
      </div>

      {/* img */}
      <div className="mt-6">
        <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-lg" />
      </div>

      {/* des */}
      <div className="mt-8">
        <h2 className="text-4xl font-semibold">
          {product.title} - Specifications, Features, and Performance Details
        </h2>
        <p className="text-gray-600 mt-3">{product.details}</p>
      </div>

     
      {/* comments*/}
      <div className="mt-10">
      
       
        {comments.map((c, index) => (
            <div className="flex gap-2 items-start" >
                <span className='rounded-full p-1 bg-gray-200 ' >  < FcBusinessman size={25} /></span>

                  <div key={index} className=" rounded-md w-full p-4 mb-3 text-sm bg-gray-100">
            <p className=" font-bold">{c.user}</p>
            <p className="text-gray-600 mt-1">{c.text}</p>
            <p className="text-gray-400 text-xs mt-2">{c.time}</p>
          </div>
            </div>
          
        ))}

       
        <div className="mt-5">
              <h3 className="text-lg font-medium mb-2">Comments</h3>
          <textarea
            placeholder="Type your massage..."
            value={demoComment}
            onChange={(e) => setDemoComment(e.target.value)}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 duration-300 ease-in-out bg-gray-100 focus:ring-secondary"
          ></textarea>
          <button
            onClick={handleSendComment}
            className="mt-2 bg-secondary cursor-pointer flex gap-2 items-center hover:bg-secondary/80 duration-300 ease-in-out px-5 py-2  rounded-md font-medium"
          >
            Send <FaArrowRightLong/>
          </button>
        </div>
      </div>
    </div>

       <Cta></Cta>
   </section>
  );
}

