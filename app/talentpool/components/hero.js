'use client';

import React from 'react'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#F4F7FA] flex flex-col items-center justify-center text-center p-6 md:p-12 overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 w-full md:h-full md:left-0 h-[92vh] left-[-24%] md:bg-cover  bg-auto top-20 md:top-0  bg-no-repeat bg-center z-0"
      style={{
        backgroundImage: `url('/images/circles.png')`,
        transform: 'translateX(100px)',
     
      }}
    ></div>

    {/* Text content */}
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
      Unlock Global Opportunities in Tech
      </h1>
      <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-700">
      Are you a tech professional looking to expand your horizons? Join SISCOM&apos;s growing community of experts and connect with leading businesses across Africa and beyond.
      </p>
      <p className="mt-2 text-base md:text-lg lg:text-xl text-gray-700">
      We offer flexible working models, collaborative projects, and opportunities for continuous learning and growth.
      </p>
      <div className="pt-6">
        <Link href='/files/siscom.pdf' download>
          <button className="py-2 px-4 relative z-20 rounded-lg text-white font-bold bg-[#EB1260] hover:bg-[#F0618A] transition-colors w-full md:w-56 lg:w-72 h-12 lg:h-14">
          Join Talent Pool
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Hero