import React from 'react'
import Image from 'next/image';
const EngagementProcess = () => {
  return (
    <>
<div className="flex flex-col md:flex-row md:px-30 bg-[#1B2236] items-start p-6 md:p-12 space-y-6 md:space-y-0">
  {/* First Column (Title and Numbered List) */}
  <div className="flex-1 flex flex-col space-y-6 md:pl-96">
    <h1 className="text-3xl md:text-4xl font-bold text-white">SISCOM Client<br/> Engagement Process</h1>

    <div className="space-y-6">
      {/* Numbered List Items */}
      {[
        {
          number: 1,
          subtitle: "Initial Consultation",
          description: "We understand your requirements, goals, and challenges to provide a tailored solution.",
        },
        {
          number: 2,
          subtitle: "Planning and Strategy",
          description: "We develop a clear project roadmap to meet your objectives efficiently.",
        },
        {
          number: 3,
          subtitle: "Design and Development",
          description: "Our team works on creating a solution that aligns with your needs.",
        },
        {
          number: 4,
          subtitle: "Testing and QA",
          description: "We ensure everything works smoothly with rigorous testing procedures.",
        },
        {
          number: 5,
          subtitle: "Launch and Deployment",
          description: "We deploy the solution, ensuring a seamless transition for your business.",
        },
        {
          number: 6,
          subtitle: "Ongoing Support",
          description: "Our team provides continuous support and maintenance to ensure long-term success.",
        },
      ].map((item) => (
        <div key={item.number} className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            {item.number}. {item.subtitle}
          </h2>
          <p className="text-base pl-7 md:text-lg text-[#93969f]">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    
  </div>


  

{/* Second Column (Images with Centered and Larger Overlay) */}
<div className="flex-1 flex items-center justify-center md:pl-12 relative">
  {/* Background Image (Circle) */}
  <div className="w-[300px] h-[320px] md:w-[463px] md:h-[504px] relative overflow-hidden">
    <Image 
      src="/images/Oval.png" 
      alt="Process Image" 
      layout="responsive" 
      width={463} 
      height={504} 
      objectFit="cover" 
    />
    
    {/* Top-left image, partially visible */}
    <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden">
        <Image 
          src="/images/Fill1.png" 
          alt="Overlay Image" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </div>
  </div>

  {/* Centered Image that exceeds the circle */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[240px] h-[385px] md:w-[364px] md:h-[585px]">
    <Image 
      src="/images/young_man.png" 
      alt="Centered Image" 
      layout="fill" 
      objectFit="contain" 
    />
  </div>
</div>
</div>

{/* New Row with Centered Text and Button */}
<div className="flex flex-col items-center bg-[#F4F7FA] p-6 md:p-12">
  <p className="text-center text-xl md:text-2xl font-semibold text-[#000000] mb-4">
    Partner with SISCOM and power your business with top-tier tech talent!
  </p>
  <button className="bg-[#EB1260] w-64 h-14 text-white py-2 px-4 rounded hover:bg-[#c81057] transition duration-300">
  Find Your Expert Talent
  </button>
</div>
</>
  )
}

export default EngagementProcess