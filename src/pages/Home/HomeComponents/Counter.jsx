import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className="text-center mt-20 ">
      <h2 className=" mb-10 text-3xl font-semibold">Buy, Sell and Recycle</h2>
      <div className="flex justify-center  px-5 place-content-center  space-x-20">
        
        {/* First Counter */}
        <div className='border-r-2 lg:p-10 border-r-gray-100 '>
          <CountUp
            start={0}
            end={379}
            duration={2.5}
            suffix=" GW"
            className="lg:text-5xl text-[#B45C3D] font-bold"
          />
          <p className="text-xs text-gray-600 mt-2">
            Solar panel capacity installed each year worldwide
          </p>
        </div>

        {/* Second Counter */}
        <div className='border-r-2 lg:p-10 border-r-gray-100'>
          <CountUp
            start={0}
            end={78}
            duration={2.5}
            suffix=" million tons"
            className="lg:text-5xl text-[#B45C3D] font-bold"
          />
          <p className="text-xs text-left text-gray-600 mt-2 max-w-xs">
            Solar panels that will reach the end of their useful life before 2050
          </p>
        </div>

        {/* Third Counter */}
        <div className='lg:p-10 p-2'>
          <CountUp
            start={0}
            end={25}
            duration={2.5}
            suffix=" Years"
            className="lg:text-5xl text-[#B45C3D] font-bold"
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
