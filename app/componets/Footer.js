import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
<footer className="bg-[#161C2D] text-white py-8" style={{ height: 483 }}>
  <div className="container mx-auto flex flex-col items-center">
    
    {/* Top Navigation Links */}
    <div className="flex flex-col md:flex-row   space-y-2  md:space-y-0 md:space-x-28  mb-8 md:mb-12 text-center"> 
      {/* Stacking in a column on mobile, spacing between links on larger screens */}
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">About Us</a>
      <a href="#" className="hover:underline">Hire Talent</a>
      <a href="#" className="hover:underline">Join Talent Pool</a>
      <a href="#" className="hover:underline">Contact Us</a>
    </div>

    {/* Logo */}
    <div className="mb-6">
      <Image 
        src="/images/footerlogo.png" 
        alt="Company Logo" 
        width={131} 
        height={38} 
      />
    </div>

    {/* Contact Information */}
    <div className="text-center mb-10">
      <p className='text-white'>Phone: 0717512222</p>
      <p className='text-white'>Email: info@siscom.tech</p>
      <p className='text-white'>Location: Nairobi garage, Delta towers Westlands</p>
    </div>

{/* Divider */}
<div className="border-t md:py-12 py-8 border-white w-[90%] md:w-full "></div>

{/* Copyright */}
<div className="text-center text-sm md:px-0">
  <p className="text-white">
    &copy; {new Date().getFullYear()} Copyright.{' '}
    <span className="text-[#EB1260]">Siscom Technology Limited</span>
  </p>
</div>
  </div>
</footer>

  );
};
