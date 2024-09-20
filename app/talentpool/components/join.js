'use client';
import { useState } from 'react';
import axios from 'axios';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBaseUrl } from '@/utils/baseUrl';

const JoinUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    yearsOfExperience: '',
    linkedinProfile: '',
    previousWorkPortfolio: '',
    specialization: '',
    technicalSkills: '',
  });
  const [uploading, setUploading] = useState(false);
  const baseUrl = getBaseUrl();
  // Track which error messages have been displayed
  const displayedMessages = new Set();
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('resume', formData.resume);
    data.append('years_of_experience', formData.yearsOfExperience);
    data.append('linkedin_profile', formData.linkedinProfile);
    data.append('previous_work_portfolio', formData.previousWorkPortfolio);
    data.append('specialization', formData.specialization);
    data.append('technical_skills', formData.technicalSkills);
  
    setUploading(true);
  
    axios
      .post(`${baseUrl}/api/talents`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success(`Form submitted successfully! Uploaded file: ${formData.resume?.name}`);
          setFormData({
            name: '',
            email: '',
            resume: null,
            yearsOfExperience: '',
            linkedinProfile: '',
            previousWorkPortfolio: '',
            specialization: '',
            technicalSkills: '',
          });
          setErrors({}); // Clear errors on successful submission
        } else {
          toast.error('An unexpected response status received');
        }
      })
      .catch((error) => {
        // Initialize errorData as an empty object
        let errorData = {};
      
        // Check if error response data is available
        if (error.response) {
          try {
            // Manually remove the extra character at the start if necessary
            let responseData = error.response.data;
            if (typeof responseData === 'string') {
              // Remove the first character if it's not a valid JSON starting character
              if (responseData[0] !== '{' && responseData[0] !== '[') {
                responseData = responseData.slice(1);
              }
      
              // Attempt to parse the JSON
              errorData = JSON.parse(responseData);
            } else {
              errorData = responseData;
            }
      
            // console.log("Parsed error data:", errorData.errors);
      
            // Destructure message and errors from errorData
            const { message, errors: errorDetails } = errorData;
      
            // // Show general error message if available
            // if (message) {
            //   toast.error(message);
            // }
      
            // Show specific error messages for each field if available
            if (errorDetails && typeof errorDetails === 'object') {
              Object.keys(errorDetails).forEach((key) => {
                toast.error(`${key.replace(/_/g, ' ')}: ${errorDetails[key].join(', ')}`);
              });
            }
          } catch (e) {
            toast.error('An error occurred while processing the error response.');
            console.error('Error parsing response data:', e);
          }
        } else {
          // Handle case where error.response is undefined
          // toast.error('An error occurred while submitting the form.');
        }
      })
      .finally(() => {
        setUploading(false); // Ensure uploading state is reset
      });
  };
  
  
  
  
  
  return (
    <div className="bg-[#F4F7FA] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <ToastContainer />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col space-y-4 text-center md:text-start">
            <h1 className="text-3xl font-bold">Join Us Today</h1>
            <p className="text-gray-600">
              Ready to take your career to the next level? Submit<br /> your details here.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-6 w-6 text-[#EB1260]" />
              <p>info@siscom.tech</p>
            </div>

            <div className="flex items-center space-x-2 md:pl-0 pl-8">
              <MapPinIcon className="h-6 w-6 text-[#EB1260]" />
              <p>Nairobi garage, Delta <br /> towers Westlands</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  First & Last Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Resume Upload
                </label>
                <div className="mt-1 flex flex-col items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                      >
                        <span>Click to upload</span>
                        <input
                          id="file-upload"
                          name="resume"
                          type="file"
                          onChange={handleFileChange}
                          className="sr-only"
                          required
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOCX, TXT up to 10MB</p>
                  </div>
                  {formData.resume && (
                    <p className="mt-4 text-sm text-gray-700">Selected file: {formData.resume.name}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  required
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700">
                  LinkedIn Profile
                </label>
                <input
                  type="text"
                  id="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="previousWorkPortfolio" className="block text-sm font-medium text-gray-700">
                  Previous Work Portfolio
                </label>
                <input
                  type="text"
                  id="previousWorkPortfolio"
                  value={formData.previousWorkPortfolio}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                  Specialization
                </label>
                <input
                  type="text"
                  id="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="technicalSkills" className="block text-sm font-medium text-gray-700">
                  Technical Skills
                </label>
                <input
                  type="text"
                  id="technicalSkills"
                  value={formData.technicalSkills}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="bg-[#EB1260] text-white font-bold py-3 px-8 rounded-md hover:bg-pink-600 w-[219px] h-[59px]"
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUsForm;
