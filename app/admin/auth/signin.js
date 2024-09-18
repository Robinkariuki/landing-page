'use client'
// pages/signin.js
import React,{useState} from 'react';
import Image from 'next/image'; // Import the Image component

export default function SignIn() {
    const [rememberMe, setRememberMe] = useState(false);

    const toggleRememberMe = () => {
      setRememberMe(!rememberMe);
    };


  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-20 bg-white">
        {/* Container for logo, heading, and paragraph */}
        <div className="w-full max-w-md text-left"> {/* Align contents to the left */}
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo.png" // Update this path to your logo
              alt="Siscom Logo"
              width={150}
              height={50}
            />
          </div>
          
          {/* Welcome Message */}
          <h1 className="text-3xl font-bold text-[#EB1260] mb-2">Welcome Back</h1>
          <p className="text-gray-500 mb-8">Enter your email and password to sign in</p>
        </div>

        {/* Form */}
        <form className="w-full max-w-md">
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#EB1260]"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#EB1260]"
            />
          </div>

          {/* Remember Me - Slide Toggle */}
          <div className="flex items-center mb-6">
            <label htmlFor="remember" className="flex items-center cursor-pointer">
              {/* Slide Toggle */}
              <div className="relative">
                <input
                  type="checkbox"
                  id="remember"
                  className="sr-only"
                  checked={rememberMe}
                  onChange={toggleRememberMe}
                />
                <div className={`block w-14 h-8 rounded-full ${rememberMe ? 'bg-[#EB1260]' : 'bg-gray-300'}`}></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${rememberMe ? 'transform translate-x-6' : ''}`}
                ></div>
              </div>
              <span className="ml-3 text-gray-700">Remember me</span>
            </label>
          </div>



          {/* Sign In Button */}
          <button className="w-full bg-[#EB1260] text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300">SIGN IN</button>
        </form>

        <div className="mt-6 text-center w-full">
          {/* <p className="text-gray-600">Don&apos;t have an account? <a href="#" className="text-customPink hover:underline"><span>Sign up</span></a></p> */}
        </div>
      </div>

      {/* Right Side - Background */}
      <div className="hidden md:flex w-1/2 h-[80vh] bg-customPink relative rounded-md overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/square.png" // Update this path to your background image
            alt="Background Pattern"
            layout="fill" // Ensures the image covers the div
            objectFit="cover" // Makes sure the image covers the entire div without stretching
            quality={75} // Adjust quality as needed
          />
        </div>
      </div>
    </div>
  );
}
