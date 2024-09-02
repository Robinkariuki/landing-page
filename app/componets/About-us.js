import React from 'react';
import Image from "next/image";



const AboutUs = () => {
  return (
    <div className="pl-64 pt-16 bg-white"  style={{height:596}}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold  mb-4">About Us</h1>
          <h2 className="text-lg font-semibold text-[#EB1260] mb-2">Who We Are</h2>
          <p className="mb-4 text-base text-wrap">
          At SISCOM, we bridge the gap between skilled tech talent <br/> and businesses in need of digital transformation.<br/> Whether you're an SME or a high-tech enterprise, our on-demand<br/> network of engineers, developers, and product<br/> managers is ready to accelerate your projects.
          </p>
          <h2 className="text-lg font-semibold text-[#EB1260] mb-2 ">Our Mission</h2>
          <p className='text-base'>
          To empower Africa’s digital transformation by solving the <br/> talent scarcity challenge and creating a robust <br/> ecosystem of tech professionals.
          </p>
        </div>
 
    <div className="flex justify-between gap-x-4">
  <div className='flex flex-col gap-y-4'>
    <Image
      src="/images/Image1.png"
      alt="Logo 1"
      width={223}
      height={209}
    />
        <Image
      src="/images/Image2.png"
      alt="Logo 2"
      width={223}
      height={124}
    />
  </div>
  <div className='flex flex-col gap-y-4'>
    <Image
      src="/images/Image3.png"
      alt="Logo 3"
      width={223}
      height={124}
    />
        <Image
      src="/images/Image4.png"
      alt="Logo 4"
      width={223}
      height={209} 
    />
  </div>
</div>


        </div>
      </div>

  );
}

export default AboutUs;
