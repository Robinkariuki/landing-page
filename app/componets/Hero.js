import React,{useState,useRef} from 'react'
import Image from "next/image";
import Link from 'next/link';
import Popup from './popup';


const Hero = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: '0', left: '0' });
    const pRef = useRef(null);
  
    const handlePopupOpen = () => {
      if (pRef.current) {
        const { top, left, width, height } = pRef.current.getBoundingClientRect();
        setPopupPosition({
          top: `${window.scrollY + top + height + 10}px`, // Adjust position as needed
          left: `${window.scrollX + left}px`,
        });
        setIsPopupVisible(true);
      }
    };
  
    const handlePopupClose = () => {
      setIsPopupVisible(false);
    };



  return (
<div className="flex container flex-col  w-full lg:pl-64 md:p-28 md:flex-row lg:items-center lg:px-20 min-h-screen">
  
  <div className="w-full md:w-1/2 flex flex-col pt-37 lg:pl-0 items-center lg:items-start lg:justify-start" >
    <p
     // Set line-height inline to maintain consistency
      className="md:p-0 lg:pl-8 pt-80 z-10 text-left lg:text-start md:text-start lg:break-words mt-60 lg:mt-0  pl-10 lg:flex  flex-wrap  text-3xl md:text-4xl lg:text-5xl font-bold"
    >
  Empower Your Digital
  Transformation with<br/>

  Africa&apos;s Leading Tech<br/>

  Talent Network
      <span className="inline-flex -space-x-3   -mt-1  -ml-0 lg:absolute lg:mt-9rem lg:ml-[18%]  md:mt-0">
        <Image
          src="/images/female1.png" // Replace with actual avatar paths
          alt="Avatar 1"
          width={48}
          height={48}
          className="rounded-full border-2 border-white w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
          //  className="w-36 h-37 md:w-36 md:h-37 lg:w-48 lg:h-48"
        />
        <Image
          src="/images/man1.png" // Replace with actual avatar paths
          alt="Avatar 2"
          width={48}
          height={48}
          className="rounded-full border-2 border-white w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
        />
        <Image
          src="/images/female1.png" // Replace with actual avatar paths
          alt="Avatar 3"
          width={48}
          height={48}
          className="rounded-full border-2 border-white w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
        />
        <Image
          src="/images/man2.png" // Replace with actual avatar paths
          alt="Avatar 4"
          width={48}
          height={48}
          className="rounded-full border-2 border-white w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
        />
      </span>
    </p>

    <p className=' block pt-18 md:hidden  z-10 lg:text-justify  text-center  lg:flex-wrap break-words p-5  lg:pl-10  lg:p  md:text-4xl lg:text-lg'>
    Hire Local, Hire Global. Scale your tech teams<br/> on-demand with verified experts across various specializations.
    </p>

    <p className=' hidden md:block  z-10 lg:text-justify    lg:flex-wrap break-words p-5  lg:pl-10  lg:p  md:text-4xl lg:text-lg'>
    Hire Local, Hire Global. Scale your tech teams on-demand<br/> with verified experts across various specializations.
    </p>

<div className='lg:pl-10'>
    <Link href='/files/siscom.pdf' download>
        <button className="py-2 relative z-20 px-4  rounded-lg  text-white font-bold bg-[#EB1260] hover:bg-[#F0618A] transition-colors w-72 h-12 md:w-56 md:h-12 lg:w-72 lg:h-14"
  // style={{ width: "259px", height: "59px" }}
> 
  Find Your Expert Talent
</button>
  
</Link>
</div>
<p
          ref={pRef}
          style={{ color: '#EB1260', fontSize: '17px' }}
          className="font-bold cursor-pointer relative z-20  mt-4 lg:pl-10  w-64 h-12 md:w-64 md:h-12 lg:w-96 lg:h-14"
          onClick={handlePopupOpen}
        >
          &gt;&gt; Join Our Expert Community
        </p>
        <Popup
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          position={popupPosition}
        />
  </div>

<div className=''> 
  <div className=" absolute   inset-0 z-0 top-20 h-[70vh] left-[-64%] right-[0%] bottom-0 overflow-hidden lg:w-[-80%] lg:left-[0%]  lg:top-0 lg:h-[100vh]  md:left-[0%] md:w-[100] md:h-[100vh] md:ml-36 md:top-0  ">
  <Image
    src="/images/circles.png"
    alt="circles"
    layout="fill" // Ensures the image covers the container
    objectFit="cover" // Ensures the image fits inside the container without cropping
    quality={100} // Optional: Adjust image quality if needed


  />
  </div>
  <div className="absolute  lg:flex  top-[38%]  left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-10  lg:top-[48%]  lg:left-[72%]  ">
            <Image
              height={529} // Adjust height to your preference
              width={782}  // Adjust width to your preference
              alt="centered-image"
              src="/images/people.png" // Replace with your actual image path
              className="w-[320px] h-[280px] object-cover max-w-none lg:w-[792px] lg:h-[429px]"
            />
          </div> 
</div>



      {/* <div className="flex flex-col  justify-center min-h-screen gap-8 px-6 lg:px-72  items-start">

      <p
  style={{ lineHeight: "52px" }} // Set line-height inline to maintain consistency
  className="text-start break-words flex items-center text-2xl md:text-4xl lg:text-5xl font-bold"
>
  Empower Your Digital <br /> Transformation with <br />
  Africa&apos;s Leading Tech <br />
  Talent Network
          <span className="lg:flex absolute -top-[-420px] left-[34%] -space-x-3">
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
        <Link href='/files/siscom.pdf' download>
        <button
  className="py-2 relative z-20 px-4 rounded-lg text-white font-bold bg-[#EB1260] hover:bg-[#F0618A] transition-colors"
  style={{ width: "259px", height: "59px" }}
> 
  Find Your Expert Talent
</button>
  
</Link>
<p
          ref={pRef}
          style={{ color: '#EB1260', fontSize: '17px' }}
          className="font-bold cursor-pointer relative z-20"
          onClick={handlePopupOpen}
        >
          &gt;&gt; Join Our Expert Community
        </p>

        <Popup
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          position={popupPosition}
        />
      </div>
      <div className="absolute hidden lg:flex inset-0 z-0  left-auto top-0 bottom-0 ">
        <Image
          height={830} // Desired size with correct aspect ratio
          width={1700} // Desired size with correct aspect ratio
        alt="circles"
        src="/images/circles.png"

        />
      </div>
      <div className="absolute hidden lg:flex  top-[46%]  left-[75%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              height={529} // Adjust height to your preference
              width={782}  // Adjust width to your preference
              alt="centered-image"
              src="/images/people.png" // Replace with your actual image path
               className="w-[782px] h-[429px] object-cover max-w-none"
            />
          </div> */}
    </div>
  )
}

export default Hero