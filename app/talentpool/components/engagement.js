import React from "react";
import Image from "next/image";

const EngagementModels = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 md:pl-28 space-y-16">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8">Engagement Models for Talents</h1>

      {/* Engagement Model 1 */}
      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-16">

        
        {/* Text Content */}
        <div className="w-full md:w-1/2 m-2 md:pb-12">
          <h2 className="text-xl font-bold mb-2 text-[#EB1260]">
            1. On-Demand Engagement
          </h2>
          <p className="mb-2">
            <strong>Description:</strong> Work on specific tasks or short-term projects that match your skills and availability. Perfect for talents who prefer flexibility and variety in their work.
          </p>
          <p>
            <strong>Benefits:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Flexible schedule</li>
            <li>Opportunity to work on multiple projects</li>
            <li>Gain experience across different industries and technologies</li>
          </ul>
        </div>
{/* Image */}
<div className="relative w-full md:w-[462px] md:h-[260px] h-[200px] rounded-lg overflow-hidden">
  <Image
    src="/images/rec1.png"
    alt="On-demand engagement image"
    layout="fill"
    objectFit="cover"
    className="w-full h-full"
  />
</div>


      </div>

      {/* Engagement Model 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 mb-16">
        {/* Image */}
        <div className="relative w-full md:w-[462px] md:h-[260px] h-[200px] rounded-lg overflow-hidden">
          <Image
            src="/images/rec2.png"
            alt="Long-term project engagement image"
            layout="fill"
            objectFit="cover"
             className="w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-12 pb-3" >
          <h2 className="text-xl font-bold mb-2  text-[#EB1260]">
            2. Long-Term Project Engagement
          </h2>
          <p className="mb-2">
            <strong>Description:</strong> Commit to longer-term projects where you can see your work through from start to finish. Ideal for talents who enjoy deep involvement in a single project.
          </p>
          <p>
            <strong>Benefits:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Consistent work and income</li>
            <li>Deeper integration with project teams</li>
            <li>Potential for long-term career growth within projects</li>
          </ul>
        </div>
      </div>

      {/* Engagement Model 3 */}
      <div className="flex flex-col md:flex-row  items-center md:space-x-8 mb-16">
                {/* Text Content */}
                <div className="w-full md:w-1/2  md:pb-12">
          <h2 className="text-xl font-bold mb-2 text-[#EB1260]">
            3. Dedicated Team Placement
          </h2>
          <p className="mb-2">
            <strong>Description:</strong> Join a dedicated team working exclusively on a client’s ongoing needs. This model offers the stability of a full-time role with the flexibility of a remote engagement.
          </p>
          <p>
            <strong>Benefits:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Stability and consistent engagement</li>
            <li>Opportunity to build strong relationships with clients</li>
            <li>Long-term career development with a specific domain</li>
          </ul>
        </div>
        {/* Image */}
        <div className="relative w-full md:w-[462px] md:h-[260px] h-[200px] rounded-lg overflow-hidden">
          <Image
            src="/images/rec3.png"
            alt="Dedicated team placement image"
            layout="fill"
            objectFit="cover"
             className="w-full h-full"
          />
        </div>


      </div>

      {/* Engagement Model 4 */}
      <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 mb-16">
        {/* Image */}
        <div className="relative w-full md:w-[462px] md:h-[260px] h-[200px] rounded-lg overflow-hidden">
          <Image
            src="/images/rec4.png"
            alt="Consulting and advisory roles image"
            layout="fill"
            objectFit="cover"
             className="w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-12 md:pb-4">
          <h2 className="text-xl font-bold mb-2 text-[#EB1260]">
            4. Consulting and Advisory Roles
          </h2>
          <p className="mb-2">
            <strong>Description:</strong> Use your expertise to provide strategic advice and guidance to clients on specific challenges or projects. This is ideal for seasoned professionals who want to leverage their experience in a consultative capacity.
          </p>
          <p>
            <strong>Benefits:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Influence high-level decision-making</li>
            <li>Work on diverse, strategic projects</li>
            <li>Build a reputation as a thought leader in your field</li>
          </ul>
        </div>
      </div>

      {/* Engagement Model 5 */}

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
                {/* Text Content */}
                <div className="w-full md:w-1/2 md:pb-4">
          <h2 className="text-xl font-bold mb-2 text-[#EB1260]">
            5. Hybrid Model
          </h2>
          <p className="mb-2">
            <strong>Description:</strong> Combine different engagement models to suit your career goals and lifestyle. For example, you can take on long-term projects while also engaging in short-term tasks or consulting roles.
          </p>
          <p>
            <strong>Benefits:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Maximum flexibility</li>
            <li>Diverse experience and skill development</li>
            <li>Ability to balance various types of work for a well-rounded career</li>
          </ul>
        </div>
        {/* Image */}
        <div className="relative w-full md:w-[462px] md:h-[260px] h-[200px] rounded-lg overflow-hidden">
          <Image
            src="/images/rec5.png"
            alt="Hybrid model image"
            layout="fill"
            objectFit="cover"
             className="w-full h-full"
          />
        </div>


      </div>
    </div>
  );
};

export default EngagementModels;
