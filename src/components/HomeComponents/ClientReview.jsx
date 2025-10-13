import React from "react"
import bgImg from "../svg/reviewBgImg.svg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    id:1,
    img: "https://i.ibb.co.com/NnFvP6R0/young-handsome-business-man-choosing-car-car-showroom-1.png",
    text: `I went through tax season last year with a US based Tax person that I have been using for years. He could not answer my questions pertaining to my expat status and I was lucky enough, yes, lucky enough to have a friend down here steer me to Randall Brady and his very competent team of tax specialists. Every question was met...`,
    name: "Jared Woods",
    role: "Solar Installer"
  },
  { id:2,
    img: "https://i.ibb.co.com/xqhSpk1S/business-man-banner-concept-with-copy-space-1.png",
    text: `I went through tax season last year with a US based Tax person that I have been using for years. He could not answer my questions pertaining to my expat status and I was lucky enough, yes, lucky enough to have a friend down here steer me to Randall Brady and his very competent team...`,
    name: "Jared Woods",
    role: "Solar Installer"
  },
  
  { id:3,
    img: "https://i.ibb.co.com/xqhSpk1S/business-man-banner-concept-with-copy-space-1.png",
    text: `I went through tax season last year with a US based Tax person that I have been using for years. He could not answer my questions pertaining to my expat status and I was lucky enough, yes, lucky enough to have a friend down here steer me to Randall Brady and his very competent team...`,
    name: "Jared Woods",
    role: "Solar Installer"
  },
   { id:4,
    img: "https://i.ibb.co.com/NnFvP6R0/young-handsome-business-man-choosing-car-car-showroom-1.png",
    text: `I went through tax season last year with a US based Tax person that I have been using for years. He could not answer my questions pertaining to my expat status and I was lucky enough, yes, lucky enough to have a friend down here steer me to Randall Brady and his very competent team of tax specialists. Every question was met...`,
    name: "Jared Woods",
    role: "Solar Installer"
  },

]

export default function ClientReview() {
  return (
    <div
      className="w-full py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className=" 2xl:max-w-9/12 max-w-11/12 mx-auto px-4">
        <h2 className="text-4xl font-bold text-left mb-10">What Our Users Say</h2>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className=" rounded-xl border-4 border-white bg-yellow-50/90">
                  <CardContent className="p-6 flex gap-6">
                    
                    <div className="space-y-3">
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500" />)}
                      </div>
                      <p className=" text-gray-600">{review.text} <span className="text-secondary cursor-pointer">See More</span></p>
                      <p className="mt-3 text-[#B45C3D] font-semibold">— {review.name}</p>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                    <img src={review.img} alt={review.name} className="w-full h-full rounded-lg object-cover" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-top-15 left-330 text-white text-2xl hover:bg-secondary cursor-pointer duration-300 ease-in-out  bg-white/5" />
          <CarouselNext className=" -top-15 right-0 border-none bg-yellow-400 hover:bg-yellow-500 text-black" />
        </Carousel>
      </div>
    </div>
  )
}

