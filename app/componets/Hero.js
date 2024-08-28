import React from 'react'
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex  flex-col lg:flex-row">
      <div className="flex flex-col  justify-center min-h-screen gap-8 px-6 lg:px-56  items-start">

      <p
  style={{ lineHeight: "52px" }} // Set line-height inline to maintain consistency
  className="text-start break-words flex items-center text-2xl md:text-4xl lg:text-5xl font-bold"
>
  Empower Your Digital <br /> Transformation with <br />
  Africa&apos;s Leading Tech <br />
  Talent Network
          <span className="hidden lg:flex absolute -top-[-420px] left-[31%] -space-x-3">
              <Image
                src="/images/female1.png" // Replace with actual avatar paths
                alt="Avatar 1"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/images/man1.png" // Replace with actual avatar paths
                alt="Avatar 2"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/images/female1.png" // Replace with actual avatar paths
                alt="Avatar 3"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/images/man2.png" // Replace with actual avatar paths
                alt="Avatar 4"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
            </span>
        </p>
        
        <p style={{ fontSize: "19px", color: "#161C2D" }}>
          Hire Local, Hire Global. Scale your tech teams on-demand
          <br /> with verified experts across various specializations.
        </p>
        <button
          style={{ backgroundColor: "#EB1260", width: "259px", height: "59px" }}
          className="py-2 px-4 rounded-lg text-white font-bold"
        >
          Find Your Expert Talent
        </button>
        <p style={{color:"#EB1260",fontSize:"17px"}} className="font-bold">
        &gt;&gt; Join Our Expert Community
        </p>
        
      </div>
      <div className="absolute hidden lg:flex inset-0 z-0  left-auto top-0 bottom-0 ">
        <Image
          height={830} // Desired size with correct aspect ratio
          width={1800} // Desired size with correct aspect ratio
        alt="circles"
        src="/images/circles.png"
        />
      </div>
      <div className="absolute hidden lg:flex  top-[46%]  left-[65%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              height={429} // Adjust height to your preference
              width={782}  // Adjust width to your preference
              alt="centered-image"
              src="/images/people.png" // Replace with your actual image path
               className="w-[782px] h-[429px] object-cover"
            />
          </div>
    </div>
  )
}

export default Hero