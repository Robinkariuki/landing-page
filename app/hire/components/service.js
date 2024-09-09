import React from 'react'
import Image from 'next/image';

const Services = () => {
  return (

<div className="space-y-12">
      {/* First Row */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0">
  {/* First Column (Text) */}
  <div className="flex-1 flex flex-col  text-left justify-end">
    <div className="md:pl-96 space-y-3"> {/* Padding inside the column */}
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
  </div>

  {/* Second Column (Image) */}
  <div className="flex-1 flex items-center justify-center md:pl-12"> {/* Image's padding remains unchanged */}
    <div className="md:w-[70%] md:h-[10%]">
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

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0">

{/* Second Column (Image) */}
<div className="flex-1 flex items-center justify-center md:pl-64"> {/* Reduced md:pl-96 to md:pl-32 */}
  <div className="md:w-[70%] md:h-[10%]">
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
<div className="flex-1 flex flex-col justify-end  md:pl-14 space-y-4"> {/* Reduced md:pl-20 to md:pl-12 */}
<div className="md:pr-[200px]  space-y-3" >  {/* Padding inside the column */}
  <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">2. Project-Based Engagement</h2>
  <p className="text-base md:text-lg">
    <span className="font-bold">Model Description:</span> Clients can quickly scale their teams by hiring tech experts from SISCOM on an as-needed basis. This model is ideal for businesses with fluctuating project demands or those needing to fill specific skill gaps for short-term projects.
  </p>
  <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">Value to Clients:</h2>
  <p className="text-base md:text-lg">
    <span className="font-bold">End-to-End Delivery:</span> SISCOM takes responsibility for project execution, ensuring timely and quality delivery
  </p>
  <p className="text-base md:text-lg">
    <span className="font-bold">Expertise on Demand:</span>  Access to specialized talent for specific project requirements, such as software development, AI/ML integration, or cloud infrastructure.
  </p>
  <p className="text-base md:text-lg">
    <span className="font-bold">Predictable Costs:</span> Clear milestones and phases with predefined costs help manage budget expectations.
  </p>
</div>
</div>

</div>




      {/* Third Row */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0">
  {/* First Column (Text) */}
  <div className="flex-1 flex flex-col text-left justify-end">
    <div className="md:pl-96 space-y-3"> {/* Padding inside the column */}
      <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">3. Dedicated Team Allocation</h2>
      <p className="text-base md:text-lg">
        <span className="font-bold">Model Description:</span> SISCOM assigns a dedicated team of experts to work exclusively with a client for an extended period. This model works well for businesses with ongoing projects or those undergoing digital transformation that require sustained support.
      </p>
      <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">Value to Clients:</h2>
      <p className="text-base md:text-lg">
        <span className="font-bold">Consistency and Integration:</span> A dedicated team becomes an extension of the client`&apos;s in-house team, leading to better alignment with business goals and culture.
      </p>
      <p className="text-base md:text-lg">
        <span className="font-bold">Long-Term Focus:</span> Suitable for ongoing projects or continuous improvement initiatives where a stable team can drive sustained progress.
      </p>
      <p className="text-base md:text-lg">
        <span className="font-bold">Tailored Expertise:</span>  Teams are customized to match the client`&apos;s specific needs, ensuring the right mix of skills and experience
      </p>
    </div>
  </div>

  {/* Second Column (Image) */}
  <div className="flex-1 flex items-center justify-center md:pl-12"> {/* Image's padding remains unchanged */}
    <div className="md:w-[70%] md:h-[10%]">
      <Image 
        src="/images/image1.png" 
        alt="Service Image" 
        width={462} 
        height={384} 
        objectFit="cover" 
      />
    </div>
  </div>
</div>


      {/* fourth Row */}

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0">

{/* Second Column (Image) */}
<div className="flex-1 flex items-center justify-center md:pl-64"> {/* Reduced md:pl-96 to md:pl-32 */}
  <div className="md:w-[70%] md:h-[10%]">
    <Image 
      src="/images/image1.png" 
      alt="Service Image" 
      width={462} 
      height={284} 
      objectFit="cover" 
    />
  </div>
</div>

{/* First Column (Text) */}
<div className="flex-1 flex flex-col justify-end  md:pl-14 space-y-4"> {/* Reduced md:pl-20 to md:pl-12 */}
<div className="md:pr-[200px]  space-y-3" >  {/* Padding inside the column */}
  <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">4. Consulting and Co-Creation</h2>
  <p className="text-base md:text-lg">
    <span className="font-bold">Model Description:</span> SISCOM offers strategic consulting services, helping clients develop and implement technology strategies. This model includes co-creation sessions where SISCOM experts collaborate with the client&apos;s team to innovate and solve complex challenges.
  </p>
  <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">Value to Clients:</h2>
  <p className="text-base md:text-lg">
    <span className="font-bold">Strategic Insight:</span> Gain access to high-level expertise to guide digital transformation initiatives and technology adoption.
  </p>
  <p className="text-base md:text-lg">
    <span className="font-bold">Collaborative Innovation:</span>  Co-creation allows for the fusion of ideas, resulting in tailored solutions that align with the client&apos;s vision and objectives.
  </p>
  <p className="text-base md:text-lg">
    <span className="font-bold">Risk Mitigation:</span> Benefit from SISCOM&apos;s experience in avoiding common pitfalls and ensuring successful project outcomes.

  </p>
</div>
</div>

</div>





      {/* Fifth Row */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0">
  {/* First Column (Text) */}
  <div className="flex-1 flex flex-col text-left justify-end">
    <div className="md:pl-96 space-y-3"> {/* Padding inside the column */}
      <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">5. Managed Services</h2>
      <p className="text-base md:text-lg">
        <span className="font-bold">Model Description:</span>SISCOM provides ongoing management of specific IT functions, such as cloud infrastructure, cybersecurity, or software maintenance. This model is ideal for clients looking to outsource non-core functions to focus on their primary business activities.
      </p>
      <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">Value to Clients:</h2>
      <p className="text-base md:text-lg">
        <span className="font-bold">Operational Efficiency:</span> Offload routine IT tasks to SISCOM, allowing internal teams to focus on strategic initiatives.
      </p>
      <p className="text-base md:text-lg">
        <span className="font-bold">Proactive Support:</span>  Continuous monitoring and management ensure minimal downtime and quick resolution of issues.
      </p>
      <p className="text-base md:text-lg">
        <span className="font-bold">Scalable Solutions:</span>Easily adjust the level of service as your business grows or changes.
      </p>
    </div>
  </div>

  {/* Second Column (Image) */}
  <div className="flex-1 flex items-center justify-center md:pl-12"> {/* Image's padding remains unchanged */}
    <div className="md:w-[70%] md:h-[10%]">
      <Image 
        src="/images/image1.png" 
        alt="Service Image" 
        width={462} 
        height={384} 
        objectFit="cover" 
      />
    </div>
  </div>
</div>



      {/* sixth Row */}

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0">

{/* Second Column (Image) */}
<div className="flex-1 flex items-center justify-center md:pl-64"> {/* Reduced md:pl-96 to md:pl-32 */}
  <div className="md:w-[70%] md:h-[10%]">
    <Image 
      src="/images/image1.png" 
      alt="Service Image" 
      width={462} 
      height={284} 
      objectFit="cover" 
    />
  </div>
</div>

{/* First Column (Text) */}
<div className="flex-1 flex flex-col justify-end  md:pl-14 space-y-4"> {/* Reduced md:pl-20 to md:pl-12 */}
<div className="md:pr-[200px]  space-y-3" >  {/* Padding inside the column */}
  <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">6. Hybrid Engagement Model</h2>
  <p className="text-base md:text-lg">
    <span className="font-bold">Model Description:</span>Combine multiple models (e.g., on-demand talent with project-based engagement) to create a customized solution that fits the unique needs of the client. This flexible approach can be adjusted as projects evolve or business priorities change.
  </p>
  <h2 className="text-xl md:text-2xl font-semibold text-[#EB1260]">Value to Clients:</h2>
  <p className="text-base md:text-lg">
    <span className="font-bold">Tailored Solutions:</span> Clients can mix and match models to create the most effective solution for their specific situation.
  </p>
  <p className="text-base md:text-lg">
    <span className="font-bold">Adaptability:</span>The flexibility to pivot between models as project demands shift or new opportunities arise.
  </p>
  <p className="text-base md:text-lg">
    <span className="font-bold">Maximized Value:</span> Leverage the strengths of different models to achieve optimal results, whether through cost savings, efficiency, or innovation.

  </p>
</div>
</div>

</div>
    </div>
  )
}

export default Services;
