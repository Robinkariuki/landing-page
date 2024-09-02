import React from 'react';
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#161C2D] text-white py-16" style={{ height: 383 }}>
      <div className="container mx-auto flex flex-wrap mr-11 space-x-4"> {/* Adjusted gap */}
        {/* First Column (Larger) */}
        <div className="flex-2 max-w-xl pr-4">
          <Image src="/images/footerlogo.png" alt="Company Logo" className='mb-2' width={131} height={38} />
          <p>
            At SISCOM, we bridge the gap between skilled tech <br /> talent and businesses in need of digital <br /> transformation.
          </p>
        </div>

        {/* Other Columns (Equal) */}
        <div className="px-12"> {/* Reduced padding */}
          <h4 className="text-lg font-bold mb-4">Home</h4>
          <ul>
            <li><a href="#" className="hover:underline">Discover</a></li>
            <li><a href="#" className="hover:underline">Get Started</a></li>
          </ul>
        </div>
        <div className="px-12"> {/* Reduced padding */}
          <h4 className="text-lg font-bold mb-4">Why Siscom?</h4>
          <ul>
            <li><a href="#" className="hover:underline">Opportunities</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
          </ul>
        </div>
        <div className="px-12"> {/* Reduced padding */}
          <h4 className="text-lg font-bold mb-4">Services</h4>
          <ul>
            <li><a href="#" className="hover:underline">Connect</a></li>
            <li><a href="#" className="hover:underline">Work Profile</a></li>
          </ul>
        </div>
        <div className="px-12"> {/* Reduced padding */}
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <ul>
            <li><a href="#" className="hover:underline">Info@siscom.com</a></li>
            <li><a href="#" className="hover:underline">+254 700 000</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-36 my-2 mx-auto" style={{ width: "68%" }}></div>

      {/* Copyright */}
      <div className="text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-[#EB1260]">Siscom Technology Limited</span>
        </p>
      </div>
    </footer>
  );
};
