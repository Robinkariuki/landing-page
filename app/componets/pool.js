import React from "react";
import { MegaphoneIcon } from '@heroicons/react/24/outline';

const Pool = () => {
  return (
    <div className="space-y-8 bg-[#fef1f5]" style={{ height: 596 }}>
      <div className="p-10">
        {/* First Row */}
        <div className="flex space-x-4 justify-end mr-96 ">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              We’ll Help You Find The
              <br /> Experts You Need
            </h1>
            <p className="mb-4 text-base">
              Lorem ipsum dolor sit amet consectetur. Vel aenean
              <br /> at phasellus id mattis arcu natoque rutrum.
            </p>
          </div>
          <div className="rounded-3xl w-[301px] shadow-lg h-[195px] bg-white p-4 mr-20">
            <div className="text-left">
              <div className="flex items-center justify-start space-x-4">
              <MegaphoneIcon className="h-14 w-12 text-[#EB1260] mb-8" /> 
                <h3 className="text-xl font-bold">
                  Software <br/>Development <br/>Lifecycle
                </h3>
              </div>
              <p className="text-sm mt-2">
                Project Managers, Product Managers, Product Designers, Product
                Engineers, QA, DEVOPS
              </p>
            </div>
          </div>
          <div className="rounded-3xl w-[301px] text-white shadow-lg h-[195px] bg-[#EB1260] p-4">
            <div className="text-left">
              <div className="flex items-center justify-start space-x-4">
              <MegaphoneIcon className="h-14 w-12 text-white" /> 
                <h3 className="text-xl font-bold">
                Network & <br/> Telecoms                </h3>
              </div>
              <p className="text-sm mt-8">
              NOC analysts, Engineers, Installation experts, Hardware engineers, Systems Engineers
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex space-x-4 justify-center  mt-5">
        <div className="rounded-3xl w-[301px] shadow-lg h-[195px] bg-white p-4">
            <div className="text-left">
              <div className="flex items-center justify-start space-x-4">
              <MegaphoneIcon className="h-14 w-12 text-[#EB1260]" /> 
                <h3 className="text-xl font-bold">
                Cloud & <br/>
                Infrastructure
                </h3>
              </div>
              <p className="text-sm mt-2">
              Cloud Engineers, Data Center
              Analyst, Infrastructure Engineers
              </p>
            </div>
          </div>
          <div className="rounded-3xl w-[301px] shadow-lg h-[195px] bg-white p-4">
            <div className="text-left">
              <div className="flex items-center justify-start space-x-4">
              <MegaphoneIcon className="h-14 w-12 text-[#EB1260]" /> 
                <h3 className="text-xl font-bold">
                Augmentation<br/>
                Roles
                </h3>
              </div>
              <p className="text-sm mt-2">
              IT Managers, IT Support, Systems Engineer,
              Fullstack Developers, Devops, Technical PM’s
              </p>
            </div>
          </div>
          <div className="rounded-3xl w-[301px] shadow-lg h-[195px] bg-white p-4">
            <div className="text-left">
              <div className="flex items-center justify-start space-x-4">
              <MegaphoneIcon className="h-14 w-12 text-[#EB1260]" /> 
                <h3 className="text-xl font-bold">
                ML/AI
                </h3>
              </div>
              <p className="text-sm mt-2">
              Machine learning engineers
              and AI experts
              </p>
            </div>
          </div>
          <div className="rounded-3xl w-[301px] shadow-lg h-[195px] bg-white p-4">
            <div className="text-left">
              <div className="flex items-center justify-start space-x-4">
              <MegaphoneIcon className="h-14 w-12 text-[#EB1260]" /> 
                <h3 className="text-xl font-bold">
                Specialty <br/> Skills
                </h3>
              </div>
              <p className="text-sm mt-2">
              Data Scientist. Data Analyst, Data Engineer,
              Cyber security & Forensics experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pool;
