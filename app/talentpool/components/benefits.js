import React from 'react';

// Reusable CustomIcon Component
const CustomIcon = ({ className, pathData, viewBox = "0 0 2048 2048", width = 148, height = 148, fill = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
    viewBox={viewBox}
    fill={fill}
    width={width}
    height={height}
  >
    <path d={pathData} />
  </svg>
);

const myIcon1 = "M2048 512v1536H0V512h517q-2-16-3-32t-2-32q0-93 35-174t96-143t142-96T960 0q93 0 174 35t143 96t96 142t35 175q0 16-1 32t-4 32zM960 128q-66 0-124 25t-102 69t-69 102t-25 124t25 124t68 102t102 69t125 25t124-25t101-68t69-102t26-125t-25-124t-69-101t-102-69t-124-26m960 512h-555q-25 52-62 97t-85 77q103 40 186 106t140 152t89 188t31 212v64h-128v-64q0-123-44-228t-121-183t-182-121t-229-44q-111 0-210 38t-176 107t-126 162t-61 205h648l-230-230l91-90l384 384l-384 384l-91-90l230-230H256v-64q0-110 31-211t90-187t141-152t185-107q-98-69-148-175H128v1280h1792z";
const myIcon2 = "M640 512V215q-132 63-236 164T232 609l-119-49q70-137 176-247t241-185H256V0h512v512zm1176 97q-63-121-159-217t-218-160l49-118q144 74 258 188t189 258zM128 1024q0 68 10 135t31 132l-118 49Q0 1187 0 1024t51-316l119 49q-20 65-31 132t-11 135m103 415q63 121 160 218t218 160l-49 119q-144-75-258-189t-190-259zm1708-76l90 90l-557 558l-269-270l90-90l179 178zm-19-339q0-68-11-135t-31-132l119-49q51 153 51 316zM757 1879q65 21 132 31t135 10v128q-164 0-317-51z"
const myIcon3 = "M6 21v-1H4v1a7 7 0 0 0 7 7h3v-2h-3a5 5 0 0 1-5-5m18-10v1h2v-1a7 7 0 0 0-7-7h-3v2h3a5 5 0 0 1 5 5m-13 0H5a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2m19 21h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-7-5a4 4 0 1 0 4-4a4 4 0 0 0-4 4m6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2"
const myIcon4 = ""
const myIcon5 ="M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586L3.414 26L13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z"

const Benefits = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Benefits of Joining SISCOM</h1>

      {/* Subtitle */}
      <h2 className="text-2xl font-semibold mb-6 text-[#EB1260]">
        Value Proposition for Talents:
      </h2>

      {/* Paragraph */}
      <p className="text-lg mb-6">
        Unlock Global Opportunities and Grow Your Tech Career with SISCOM
      </p>

      {/* List of Benefits */}
      <ul className="space-y-4 ml-8">
        <li className="flex items-center">
        <CustomIcon className="mr-12" pathData={myIcon1} />
          <p className="text-lg">
            <strong>Access to Top-Tier Projects: </strong>
            Join our exclusive talent network and work on cutting-edge projects with leading companies in Fintech, Healthcare, Cloud Infrastructure, and more. Our clients are looking for the best, and we match them with top talent like you.
          </p>
        </li>
        <li className="flex items-center">
        <CustomIcon className="mr-12" pathData={myIcon2} />
          <p className="text-lg">
            <strong>Flexible Working Models: </strong>
            Choose how you work—whether it&apos;s on an hourly, daily, weekly, or project basis, we offer flexible earning models that fit your lifestyle. You decide when and how much you want to work, giving you the freedom to balance your career with your life.
          </p>
        </li>
        <li className="flex items-center">
        <CustomIcon className="mr-12"viewBox="0 0 32 32" pathData={myIcon3} />
          <p className="text-lg">
            <strong>Collaborative Learning Environment: </strong>
            At SISCOM, we believe in continuous growth. Collaborate with international experts, gain exposure to more complex and demanding projects, and enhance your skills through knowledge transfer opportunities.
          </p>
        </li>
        <li className="flex items-center">
        <CustomIcon className="mr-12"  pathData={myIcon1} />
          <p className="text-lg">
            <strong>Hassle-Free Onboarding: </strong>
            Getting started with us is easy. Create your profile, get vetted, and be notified when the perfect project becomes available. Our digital onboarding process is designed to be quick and efficient, so you can start working without delay.
          </p>
        </li>
        <li className="flex items-center">
        <CustomIcon className="mr-12" viewBox="0 0 32 32" pathData={myIcon5} />
          <p className="text-lg">
            <strong>Global Reach, Local Impact: </strong>
            While you work with global clients, you’re also contributing to the digital transformation of Africa. Be part of a community that is making a real difference by solving the talent scarcity challenge in one of the fastest-growing tech markets in the world.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Benefits;
