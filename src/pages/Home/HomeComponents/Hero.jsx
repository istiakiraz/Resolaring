import { Button } from "@/components/ui/button";
import heroImg from '../../../assets/Img/HeroImg.svg'
import PrimaryButton from "../../../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";
import SecondaryButton from "../../../common/SecondaryButton";

export default function Hero() {
  return (
    <section className="relative 2xl:max-w-10/12  mx-auto lg:rounded-3xl py-40 px-5 lg:px-0 flex items-center justify-center text-white overflow-hidden">
      {/* Background Image + Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg} 
          alt="Solar Panel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 lg:w-5/12 lg:mr-auto lg:pl-20  text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Empowering Sustainability 
          Through Solar Recycling
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Buy and sell quality second-hand solar equipment to save money,
          reduce waste, and promote a greener future.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
         <PrimaryButton to="/marketplace" icon={FaArrowRightLong}>
Browse Marketplace
         </PrimaryButton>
         <SecondaryButton to="/sell-equipment">
  Sell Your Equipment
</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
