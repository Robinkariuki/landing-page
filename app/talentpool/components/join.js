import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const JoinUsForm = () => {
  return (
    <div className="bg-[#F4F7FA] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side: Heading and Description */}
          <div className="flex flex-col space-y-4 text-center md:text-start">
            <h1 className="text-3xl font-bold">Join Us Today</h1>
            <p className="text-gray-600">
              Ready to take your career to the next level? Submit<br/> your details here.
            </p>
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Email */}
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-6 w-6 text-[#EB1260]" />
              <p>info@siscom.tech</p>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 md:pl-0 pl-8">
              <MapPinIcon className="h-6 w-6 text-[#EB1260]" />
              <p>Nairobi garage, Delta <br/> towers Westlands</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First & Last Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  First & Last Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Resume Upload
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                      >
                        <span>Click to upload</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOCX, TXT up to 10MB</p>
                  </div>
                </div>
              </div>

              {/* Years of Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="experience"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* LinkedIn Profile */}
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                  LinkedIn Profile
                </label>
                <input
                  type="text"
                  id="linkedin"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Previous Work Portfolio */}
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
                  Previous Work Portfolio
                </label>
                <input
                  type="text"
                  id="portfolio"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Specialization */}
              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                  Specialization
                </label>
                <input
                  type="text"
                  id="specialization"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Technical Skills */}
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                  Technical Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-[#EB1260] text-white font-bold py-3 px-8 rounded-md hover:bg-pink-600 w-[219px] h-[59px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default JoinUsForm;
