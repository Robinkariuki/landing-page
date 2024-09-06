import React from 'react'
import Image from 'next/image';

const Services = () => {
  return (

<div className="space-y-12">
      {/* First Row */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0">
        {/* First Column (Text) */}
        <div className="flex-1 flex flex-col justify-end md:pl-96 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">1. On-Demand Talent Augmentation</h2>
          <p className="text-base md:text-lg">
            <span className="font-bold">Model Description:</span> Clients can quickly scale their teams by hiring tech experts from SISCOM on an as-needed basis. This model is ideal for businesses with fluctuating project demands or those needing to fill specific skill gaps for short-term projects.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">Value to Clients:</h2>
          <p className="text-base md:text-lg">
            <span className="font-bold">Flexibility:</span> Clients can scale their workforce up or down based on project needs without the long-term commitments associated with traditional hiring.
          </p>
          <p className="text-base md:text-lg">
            <span className="font-bold">Cost Efficiency:</span> Pay only for the talent and duration needed, minimizing overhead costs.
          </p>
          <p className="text-base md:text-lg">
            <span className="font-bold">Rapid Deployment:</span> Access to pre-vetted professionals means quick onboarding and immediate impact.
          </p>
        </div>

        {/* Second Column (Image) */}
        <div className="flex-1 flex items-center justify-start md:pl-6">
          <div className="md:w-[70%] md:h-[10%]  ">
            <Image 
              src="/images/image1.png" 
              alt="Service Image" 
              width={462} 
              height={384} 
              layout="" 
              objectFit="cover" 
            />
          </div>
        </div>
      </div>

      {/* Second Row (Image on the right, Text on the left) */}

<div className="flex  flex-col-reverse md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0">


        {/* Second Column (Image) */}
        <div className="flex-1 flex items-center justify-start md:pl-96">
          <div className="md:w-[70%] md:h-[10%]" >
            <Image 
              src="/images/image1.png" 
              alt="Service Image" 
              width={462} 
              height={284} 
              layout="" 
              objectFit="cover" 
            />
          </div>
        </div>
                {/* First Column (Text) */}
                <div className="flex-1 flex flex-col justify-end md:pl-20 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">2. Project-Based Engagement</h2>
          <p className="text-base md:text-lg">
            <span className="font-bold">Model Description:</span> Clients can quickly scale their teams by hiring tech experts from SISCOM on an as-needed basis. This model is ideal for businesses with fluctuating project demands or those needing to fill specific skill gaps for short-term projects.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">Value to Clients:</h2>
          <p className="text-base md:text-lg">
            <span className="font-bold">Flexibility:</span> Clients can scale their workforce up or down based on project needs without the long-term commitments associated with traditional hiring.
          </p>
          <p className="text-base md:text-lg">
            <span className="font-bold">Cost Efficiency:</span> Pay only for the talent and duration needed, minimizing overhead costs.
          </p>
          <p className="text-base md:text-lg">
            <span className="font-bold">Rapid Deployment:</span> Access to pre-vetted professionals means quick onboarding and immediate impact.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Services;
