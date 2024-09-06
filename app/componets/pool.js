import React from "react";
import { MegaphoneIcon } from '@heroicons/react/24/outline';

const Pool = () => {
  return (
<div className="bg-[#fef1f5] " >
  <div className="p-10">
    {/* First Row */}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-end mr-0 md:mr-96">
      <div className="text-balance" >
        <h1 className="hidden md:block text-4xl font-bold mb-4 p-12">
          We’ll Help You Find The
          <br /> Experts You Need
        </h1>
        <h1 className="text-3xl text-center font-bold mb-4 md:hidden ">
          We’ll Help You Find <br/> The
           Experts You Need
        </h1>
      </div>
      <div className="rounded-3xl w-full md:w-[301px] shadow-lg h-[195px] bg-white p-4">
        <div className="text-left">
          <div className="flex items-center justify-start space-x-4">
            <MegaphoneIcon className="h-14 w-12 text-[#EB1260] mb-8" /> 
            <h3 className="text-xl font-bold">
              Software <br/>Development <br/>Lifecycle
            </h3>
          </div>
          <p className="text-sm mt-2">
            Project Managers, Product Managers, Product Designers, Product Engineers, QA, DEVOPS
          </p>
        </div>
      </div>
      <div className="rounded-3xl w-full md:w-[301px] text-white shadow-lg h-[195px] bg-[#EB1260] p-4">
        <div className="text-left">
          <div className="flex items-center justify-start space-x-4">
            <MegaphoneIcon className="h-14 w-12 text-white" /> 
            <h3 className="text-xl font-bold">
              Network & <br/> Telecoms
            </h3>
          </div>
          <p className="text-sm mt-8 text-white">
            NOC analysts, Engineers, Installation experts, Hardware engineers, Systems Engineers
          </p>
        </div>
      </div>
    </div>

    {/* Second Row */}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center mt-5">
      <div className="rounded-3xl w-full md:w-[301px] shadow-lg h-[195px] bg-white p-4">
        <div className="text-left">
          <div className="flex items-center justify-start space-x-4">
            <MegaphoneIcon className="h-14 w-12 text-[#EB1260]" /> 
            <h3 className="text-xl font-bold">
              Cloud & <br/> Infrastructure
            </h3>
          </div>
          <p className="text-sm mt-2">
            Cloud Engineers, Data Center Analyst, Infrastructure Engineers
          </p>
        </div>
      </div>
      <div className="rounded-3xl w-full md:w-[301px] shadow-lg h-[195px] bg-white p-4">
        <div className="text-left">
          <div className="flex items-center justify-start space-x-4">
            <MegaphoneIcon className="h-14 w-12 text-[#EB1260]" /> 
            <h3 className="text-xl font-bold">
              Augmentation<br/> Roles
            </h3>
          </div>
          <p className="text-sm mt-2">
            IT Managers, IT Support, Systems Engineer, Fullstack Developers, Devops, Technical PM’s
          </p>
        </div>
      </div>
      <div className="rounded-3xl w-full md:w-[301px] shadow-lg h-[195px] bg-white p-4">
        <div className="text-left">
          <div className="flex items-center justify-start space-x-4">
            <MegaphoneIcon className="h-14 w-12 text-[#EB1260]" /> 
            <h3 className="text-xl font-bold">
              ML/AI
            </h3>
          </div>
          <p className="text-sm mt-2">
            Machine learning engineers and AI experts
          </p>
        </div>
      </div>
      <div className="rounded-3xl w-full md:w-[301px] shadow-lg h-[195px] bg-white p-4">
        <div className="text-left">
          <div className="flex items-center justify-start space-x-4">
            <MegaphoneIcon className="h-14 w-12 text-[#EB1260]" /> 
            <h3 className="text-xl font-bold">
              Specialty <br/> Skills
            </h3>
          </div>
          <p className="text-sm mt-2">
            Data Scientist. Data Analyst, Data Engineer, Cyber security & Forensics experts
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default Pool;
