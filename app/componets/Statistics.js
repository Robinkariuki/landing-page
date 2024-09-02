import React from 'react';
import Image from "next/image";

const Statistics = () => {
  return (
    <div>
           {/* Title */}
      <div className="text-center bg-white pt-8 pb-8">
        <h1 className="text-4xl font-bold text-[#161C2D]">Key Statistics</h1>
      </div>
    <div
      className="relative bg-white  bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('/images/world.png')`,
        height: '537px',
        opacity: 1,
      }}
    >

      {/* Overlay to handle content visibility over the background */}
      <div className="bg-opacity-60 w-full h-full absolute top-0 left-0"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex justify-center items-center h-full gap-4">
        {/* Card 1 */}
        <div className="bg-white  rounded-3xl shadow-lg p-6 w-[280px] h-[175px] text-center">
          <h2 className="text-2xl font-bold mb-2 text-[#EB1260]">$1.5 Trillion</h2>
          <p>Growth Projection for Africa’s internet economy by 2035</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 w-[280px] h-[175px] text-center">
          <h2 className="text-2xl font-bold mb-2 text-[#EB1260]">230 Million</h2>
          <p>Digital Jobs to be filled in Sub-Saharan Africa by 2030</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white  rounded-3xl shadow-lg p-6 w-[280px] h-[175px] text-center">
          <h2 className="text-2xl font-bold mb-2 text-[#EB1260]">120+</h2>
          <p>Experts in Product Engineering, Cloud, etc. within our network</p>
        </div>
      </div>
       {/* Avatars */}
       {/* <div className="absolute top-10 left-10">
          <Image src="/images/person1.png" alt="Avatar 1" width={50} height={50} />
          </div>  */}
    </div>
    </div>
  );
}

export default Statistics;
