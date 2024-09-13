import React from 'react';
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="text-balance bg-white text-center lg:text-left">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:px-60 lg:py-8">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-4 md:pl-14">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <h2 className="text-lg font-semibold text-[#EB1260] mb-2">Who We Are</h2>
          
          {/* Center text on mobile */}
          <p className="mb-4 text-base leading-8 md:hidden">
            At SISCOM, we bridge the gap between skilled tech talent and businesses in need of digital transformation.
            Whether you&apos;re an SME or a high-tech enterprise, our on-demand network of engineers, developers, and product managers is ready to accelerate your projects.
          </p>
          
          <p className="mb-4 hidden md:block text-base">
            At SISCOM, we bridge the gap between skilled tech talent <br />
            and businesses in need of digital transformation. <br />
            Whether you&apos;re an SME or a high-tech enterprise, our on-demand <br />
            network of engineers, developers, and product managers is ready to accelerate your projects.
          </p>

          <h2 className="text-lg font-semibold text-[#EB1260] mb-2">Our Mission</h2>
          
          {/* Center text on mobile */}
          <p className='text-base md:hidden'>
            To empower Africa&apos;s digital transformation by solving the talent scarcity challenge and creating a robust ecosystem of tech professionals.
          </p>
          
          <p className='text-base hidden md:block'>
            To empower Africa’s digital transformation by solving the <br />
            talent scarcity challenge and creating a robust <br />
            ecosystem of tech professionals.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center lg:justify-end gap-4 p-4">
          <div className='flex flex-col gap-y-4 items-center'>
            <Image
              src="/images/Image1.png"
              alt="Logo 1"
              width={150}
              height={140}
              quality={100}
              className="w-[150px] h-[140px] md:w-[323px] md:h-[309px] object-contain"
            />
            <Image
              src="/images/Image2.png"
              alt="Logo 2"
              width={150}
              height={90}
              quality={100}
              className="w-[150px] h-[90px] md:w-[323px] md:h-[194px] object-contain"
            />
          </div>
          <div className='flex flex-col gap-y-4 items-center'>
            <Image
              src="/images/Image3.png"
              alt="Logo 3"
              width={150}
              height={90}
              quality={100}
              className="w-[150px] h-[90px] md:w-[323px] md:h-[194px] object-contain"
            />
            <Image
              src="/images/Image4.png"
              alt="Logo 4"
              width={150}
              height={140}
              quality={100}
              className="w-[150px] h-[140px] md:w-[323px] md:h-[309px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
