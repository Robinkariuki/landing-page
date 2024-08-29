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
    <div className="flex  flex-col lg:flex-row">
      <div className="flex flex-col  justify-center min-h-screen gap-8 px-6 lg:px-72  items-start">

      <p
  style={{ lineHeight: "52px" }} // Set line-height inline to maintain consistency
  className="text-start break-words flex items-center text-2xl md:text-4xl lg:text-5xl font-bold"
>
  Empower Your Digital <br /> Transformation with <br />
  Africa&apos;s Leading Tech <br />
  Talent Network
          <span className="hidden lg:flex absolute -top-[-420px] left-[34%] -space-x-3">
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
      style={{ backgroundColor: "#EB1260", width: "259px", height: "59px" }}
      className="py-2  relative z-20 px-4 rounded-lg text-white font-bold hover:bg-white hover:text-[#EB1260] transition-colors"
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
          </div>
    </div>
  )
}

export default Hero