import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className="text-center py-10 lg:py-20 ">
      <h2 className=" lg:mb-10 mb-5 text-3xl font-semibold">Buy, Sell and Recycle</h2>
      <div className="flex flex-col lg:flex-row justify-center  px-5 place-content-center   space-y-10 lg:space-x-20">
        
        {/* First Counter */}
        <div className='lg:border-r-2 border-b-2 lg:p-10 p-5  border-b-gray-100 lg:border-r-gray-100 '>
          <CountUp
            start={0}
            end={379}
            duration={2.5}
            suffix=" GW"
            enableScrollSpy
            className="lg:text-5xl text-3xl text-[#B45C3D] font-bold"
          />
          <p className="text-xs text-gray-600 mt-2">
            Solar panel capacity installed each year worldwide
          </p>
        </div>

        {/* second counter */}
        <div className='lg:border-r-2 border-b-2 lg:p-10 p-5 border-b-gray-100 lg:border-r-gray-100'>
          <CountUp
            start={0}
            end={78}
            duration={2.5}
            enableScrollSpy
            suffix=" million tons"
            className="lg:text-5xl text-3xl text-[#B45C3D] font-bold"
          />
          <p className="text-xs text-center lg:text-left text-gray-600 mt-2 lg:max-w-xs">
            Solar panels that will reach the end of their useful life before 2050
          </p>
        </div>

        {/* third counter */}
        <div className='lg:p-10 p-5 '>
          <CountUp
            start={0}
            end={25}
            duration={2.5}
            suffix=" Years"
            enableScrollSpy
            className="lg:text-5xl text-3xl text-[#B45C3D] font-bold"
          />
          <p className="text-xs text-gray-600 mt-2">
            Average life of a solar panel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
