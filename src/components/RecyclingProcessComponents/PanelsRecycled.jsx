
import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import PrimaryButton from "../../common/PrimaryButton";
import bgImg from '../../assets/Img/bgOrgImg.png'

export default function PanelsRecycled() {
  const panelsData = [
    {
      image: " https://i.ibb.co.com/RTTQ2j47/stand-alone-solar-panel-system-installation-renewable-green-energy.png", 
      title: "Diagnosis of each of the panels",
      description:
        "Our installation and maintenance team guarantees optimal installation of the recycled panels and maintenance of the system in operation.",
    },
    {
      image: "https://i.ibb.co.com/rKShqw1g/image-7.png",
      title: "Can they be easily reused?",
      description:
        "If the panel passes our quality control, it can be used in the next installation. Our team will design the system based on the available recycled panels.",
    },
    {
      image: "https://i.ibb.co.com/k6kPNdZ3/image-8.png",
      title: "Panels that cannot be used are separated into pieces",
      description:
        "The damaged panels will be dismantled in parts. The aluminum frame and glass will be easily reused. Other metals have to be separated by chemical processes.",
    },
    {
      image: "https://i.ibb.co.com/fVBzT4sW/image-9.png",
      title: "Panel materials",
      description:
        "Recycled materials from the panels can be used in the pharmaceutical or automotive industries.",
    },
    {
      image: "https://i.ibb.co.com/jZR9sTYj/image-10.png",
      title: "The recycling goal",
      description:
        "The goal is to recycle 95% of the materials to guarantee a circular economy for each panel.",
    },
  ];

  return (
    <div>
      <section className="2xl:max-w-9/12 py-20 max-w-11/12 mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-12">
          How are panels recycled?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panelsData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg  overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}

          {/* CTA CARD */}
          <div className="bg-yellow-100 rounded-lg text-center flex flex-col bg-cover bg-center justify-center items-center p-8"
           style={{ backgroundImage: `url(${bgImg})` }}
          >
            
            <h3 className="text-2xl text-white font-bold mb-4">
              Ready to Buy, Sell, or Recycle Solar Equipment?
            </h3>
           <PrimaryButton to="/marketplace" icon={FaArrowRightLong}>
               Browse Marketplace
                        </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
