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
<div className="absolute top-[160px] left-[455px] z-10">
  <Image src="/images/person1.png" alt="Avatar 1" width={38} height={38} />
</div>

<div className="absolute top-[80px] left-[620px] z-10">
  <Image src="/images/person2.png" alt="Avatar 1" width={70} height={70} />
</div>


<div className="absolute top-[60px] left-[850px] z-10">
  <Image src="/images/person3.png" alt="Avatar 1" width={94} height={94} />
</div>


<div className="absolute top-[90px] left-[1040px] z-10">
  <Image src="/images/person4.png" alt="Avatar 1" width={38} height={38} />
</div>
<div className="absolute top-[40px] left-[1220px] z-10">
  <Image src="/images/person5.png" alt="Avatar 1" width={102} height={102} />
</div>
<div className="absolute top-[400px] left-[1160px] z-10">
  <Image src="/images/person9.png" alt="Avatar 1" width={70} height={70} />

</div>
<div className="absolute top-[400px] left-[960px] z-10">
  <Image src="/images/person8.png" alt="Avatar 1" width={44} height={44} />
</div>

<div className="absolute top-[400px] left-[760px] z-10">
  <Image src="/images/person7.png" alt="Avatar 1" width={56} height={56} />
</div>

<div className="absolute top-[380px] left-[480px] z-10">
  <Image src="/images/person6.png" alt="Avatar 1" width={102} height={102} />
</div>


    </div>
    </div>
  );
}

export default Statistics;
