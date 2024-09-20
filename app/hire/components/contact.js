'use client'
import React, { useState } from 'react';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBaseUrl } from '@/utils/baseUrl';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    date: '', // Add date to form data
  });


  const baseUrl = getBaseUrl();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
  
    const data = new FormData(); // Use FormData for multipart/form-data
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('company', formData.company);
    data.append('message', formData.message);
    data.append('date', today); // Append today's date
  
    try {
      const response = await fetch(`${baseUrl}/api/engagements`, {
        method: 'POST',
        body: data, // Send the FormData object directly
      });
  
      if (response.ok) {
        toast.success('Message sent successfully!');
        // Clear the form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          date: '', // Clear date
        });
      } else {
        const result = await response.json();
        toast.error(result.message || 'Failed to send message.');
      }
    } catch (error) {
      // toast.error('An error occurred while sending the message.');
    }
  };
  

  return (
    <div className="flex flex-col bg-[#F4F7FA] md:flex-row p-6 md:p12 space-y-6 md:space-y-0">
      {/* First Column (Contact Information) */}
      <div className="flex-1 flex flex-col md:pl-[341px] space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
        <p className="text-lg">Ready to scale your team? Contact us today.</p>

        <div className="flex items-center space-x-2">
          <EnvelopeIcon className="w-6 h-6 text-[#EB1260]" />
          <p className="text-lg">info@siscom.tech</p>
        </div>

        <div className="flex items-center space-x-2">
          <MapPinIcon className="w-6 h-6 text-[#EB1260]" />
          <p className="text-lg">Nairobi Garage, Delta Towers, Westlands</p>
        </div>
      </div>

      {/* Second Column (Contact Form) */}
      <div className="flex-1 md:pr-72">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto md:max-w-[607px] md:h-[680px]">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1 font-bold text-[#161C2D]">First Name</label>
              <input id="firstName" type="text" className="p-2 border border-gray-300 rounded" value={formData.firstName} onChange={handleChange} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-1 font-bold text-[#161C2D]">Last Name</label>
              <input id="lastName" type="text" className="p-2 border border-gray-300 rounded" value={formData.lastName} onChange={handleChange} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-bold text-[#161C2D]">Email</label>
              <input id="email" type="email" className="p-2 border border-gray-300 rounded" value={formData.email} onChange={handleChange} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 font-bold text-[#161C2D]">Phone</label>
              <input id="phone" type="text" className="p-2 border border-gray-300 rounded" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="company" className="mb-1 font-bold text-[#161C2D]">Company</label>
              <input id="company" type="text" className="p-2 border border-gray-300 rounded" value={formData.company} onChange={handleChange} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-bold text-[#161C2D]">Message</label>
              <textarea id="message" rows="4" className="p-2 border border-gray-300 rounded" value={formData.message} onChange={handleChange}></textarea>
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
