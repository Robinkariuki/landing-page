import React from 'react';
import Image from "next/image";



const AboutUs = () => {
  return (
    <div className="lg:pl-72  lg:pt-16 text-balance bg-white text-center"  style={{height:596}}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[40%] p-4 text-left">
          <h1 className="text-4xl font-bold  mb-4">About Us</h1>
          <h2 className="text-lg font-semibold text-[#EB1260] mb-2">Who We Are</h2>
          <p className="mb-4 block md:hidden text-base leading-8 ">
          At SISCOM, we bridge the gap between skilled tech talent and businesses in need of digital transformation.Whether you&apos;re an SME or a high-tech enterprise, our on-demand network of engineers, developers, and product managers is ready to accelerate your projects.
          </p>
          <p className="mb-4 hidden md:block text-base ">
          At SISCOM, we bridge the gap between skilled tech talent <br/> and businesses in need of digital transformation.<br/> Whether you&apos;re an SME or a high-tech enterprise, our on-demand<br/> network of engineers, developers, and product<br/> managers is ready to accelerate your projects.
          </p>

          <h2 className="text-lg font-semibold text-[#EB1260] mb-2 ">Our Mission</h2>
          <p className=' block md:hidden text-base'>
          To empower Africa&apos;s digital transformation by solving the  talent scarcity challenge and creating a robust  ecosystem of tech professionals.
          </p>
          <p className='text-base hidden md:block'>
          To empower Africa’s digital transformation by solving the <br/> talent scarcity challenge and creating a robust <br/> ecosystem of tech professionals.
          </p>

        </div>
 
        <div className="flex flex-col md:flex-row md:justify-between gap-x-4 p-4 mr-0 md:mr-96">
  <div className='flex flex-col gap-y-4'>
    <Image
      src="/images/Image1.png"
      alt="Logo 1"
      width={323}
      height={309}
      quality={100}
      className="w-[174px] h-[163px] md:w-[323px] md:h-[309px] object-contain"
    />
    <Image
      src="/images/Image2.png"
      alt="Logo 2"
      width={323}
      height={194}
      quality={100}
      className="w-[174px] h-[96px] md:w-[323px] md:h-[194px] object-contain"
    />
  </div>
  <div className='flex flex-col gap-y-4'>
    <Image
      src="/images/Image3.png"
      alt="Logo 3"
      width={323}
      height={194}
      quality={100}
      className="w-[174px] h-[96px] md:w-[323px] md:h-[194px] object-contain"
    />
    <Image
      src="/images/Image4.png"
      alt="Logo 4"
      width={323}
      height={309}
      quality={100}
      className="w-[174px] h-[163px] md:w-[323px] md:h-[309px] object-contain"
    />
  </div>
</div>



        </div>
      </div>

  );
}

export default AboutUs;
