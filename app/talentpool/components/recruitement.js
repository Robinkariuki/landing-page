import React from "react";
import Image from "next/image";

const Recruitement = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:px-30 bg-[#1B2236] items-start p-6 md:p-12 space-y-6 md:space-y-0">
        {/* First Column (Title and Numbered List) */}
        <div className="flex-1 flex flex-col space-y-6 md:pl-96">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            SISCOM Talent
            <br />
            Recruitment Process
          </h1>

          <div className="space-y-6">
            {/* Numbered List Items */}
            {[
              {
                number: 1,
                subtitle: "Apply and Create Profile:",
                description:
                  "Submit your details and showcase your skills on our platform.",
              },
              {
                number: 2,
                subtitle: "Screening and Vetting:",
                description:
                  "We review and vet your profile to ensure quality and fit.",
              },
              {
                number: 3,
                subtitle: "Matching with Opportunities:",
                description:
                  "We match you with the right projects based on your expertise and preferences.",
              },
              {
                number: 4,
                subtitle: "Client Interview:",
                description:
                  "Meet the client for final selection and project alignment.",
              },
              {
                number: 5,
                subtitle: "Launch and Deployment:",
                description:
                  "Quickly get started with a smooth, tailored onboarding process.",
              },
              {
                number: 6,
                subtitle: "Ongoing Support:",
                description:
                  "Receive continuous support throughout your engagement.",
              },
              {
                number: 7,
                subtitle: "Evaluation and Future Opportunities:",
                description:
                  "Get feedback and access to new opportunities for growth.",
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
    </>
  );
};

export default Recruitement;
