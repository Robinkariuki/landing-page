// pages/signup.js
import React from 'react';
import Image from 'next/image'; // Import the Image component

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="bg-pink-500 h-64 w-full flex justify-center items-center relative">
        <h1 className="text-white text-3xl font-bold z-10">Siscom Dashboard</h1>
        {/* Wave background using next/image */}
        <div className="absolute inset-0">
          <Image
            src="/path/to/your/wave-pattern.png" // Update this path to the actual image
            alt="Wave Background"
            layout="fill"
            objectFit="cover"
            quality={75} // Adjust quality as needed
            className="opacity-50"
          />
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center -mt-16 px-4 sm:px-0">
        <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
          {/* Logo using next/image */}
          <div className="flex justify-center mb-4">
            <Image
              src="/path/to/logo.png" // Update this path to the actual logo
              alt="Siscom Logo"
              width={150} // Set the desired width
              height={50} // Set the desired height
              quality={75} // Adjust quality as needed
            />
          </div>
          
          {/* Form */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-500"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
              />
              <label className="text-gray-700" htmlFor="remember">Remember me</label>
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300">SIGN UP</button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">Already have an account? <a href="#" className="text-pink-500 hover:underline">Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
