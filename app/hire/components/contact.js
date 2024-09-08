import React from 'react';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#F4F7FA] md:flex-row p-6 md:p-12 space-y-6 md:space-y-0">
      {/* First Column (Contact Information) */}
      <div className="flex-1 flex flex-col md:pl-[341px] space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
        <p className="text-lg ">Ready to scale your team? Contact us today.</p>

        <div className="flex items-center space-x-2">
          <EnvelopeIcon className="w-6 h-6 text-[#EB1260]" />
          <p className="text-lg ">info@siscom.tech</p>
        </div>

        <div className="flex items-center space-x-2">
          <MapPinIcon className="w-6 h-6 text-[#EB1260]" />
          <p className="text-lg">Nairobi Garage, Delta Towers, Westlands</p>
        </div>
      </div>

      {/* Second Column (Contact Form) */}
      <div className="flex-1 md:pr-72">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto md:max-w-[607px] md:h-[680px]">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="first-name" className="mb-1 font-bold text-[#161C2D]">First Name</label>
              <input id="first-name" type="text" className="p-2 border border-gray-300 rounded" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="last-name" className="mb-1 font-bold text-[#161C2D]">Last Name</label>
              <input id="last-name" type="text" className="p-2 border border-gray-300 rounded" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-bold text-[#161C2D]">Email</label>
              <input id="email" type="email" className="p-2 border border-gray-300 rounded" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 font-bold text-[#161C2D]">Phone</label>
              <input id="phone" type="text" className="p-2 border border-gray-300 rounded" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="company" className="mb-1 font-bold text-[#161C2D]">Company</label>
              <input id="company" type="text" className="p-2 border border-gray-300 rounded" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-bold text-[#161C2D]">Message</label>
              <textarea id="message" rows="4" className="p-2 border border-gray-300 rounded"></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#EB1260] text-white w-[207px] h-[59px] rounded font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
