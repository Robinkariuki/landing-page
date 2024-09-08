import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-start space-y-6  md:pl-96 p-6 md:p-12 bg-white">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#1B2236] mb-6">Testimonials</h1>

      {/* Image */}
      <div className="relative w-full md:w-[50px] h-[50px] md:h-[50px]">
        <Image 
          src="/images/qoutes.png" 
          alt="Testimonials" 
          layout="fill" 
          objectFit="contain" 
          className="rounded-lg" // Optional styling for rounded corners
        />
      </div>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl font-semibold text-[#1B2236]">
      SISCOM helped us scale our tech team rapidly and efficiently. Their experts<br/>seamlessly integrated into our projects, driving innovation and delivering exceptional results.
      </h2>
    </div>
  );
}

export default Testimonials;
