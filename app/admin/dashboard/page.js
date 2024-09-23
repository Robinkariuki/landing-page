'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import EngagementTable from './components/engagementTable';
import TalentRecruitmentTable from './components/TalentRecruitmentTable'; // Import the TalentRecruitmentTable component
import { IonCard,IonHome,CodiconGraph } from './components/icons'; 
import ProtectedRoute from '@/utils/ProtectedRoute';
import AccountSettingsModal from './components/AccountSettingsModal';
import { useAuth } from "@/utils/context/AuthContext"; 
import { getBaseUrl } from "@/utils/baseUrl";

const  Dashboard = () =>  {
  const [activePage, setActivePage] = useState('engagement'); // State to manage the active page
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
  const baseUrl = getBaseUrl();
  const { token,logout } = useAuth();


  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const handleLogout = () =>{
    logout()
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          {/* Logo */}
          <div className="mb-6">
            {/* Use the Image component for the logo */}
            <Image src={'/images/logo.png'} alt="Logo" width={150} height={50} />
          </div>
          {/* Navigation */}
          <nav>
            <ul>
              <li className="mb-4">
                <a
                  href="#"
                  className={`flex items-center ${activePage === 'dashboard' ? 'text-pink-600' : 'text-gray-600'} hover:text-pink-600`}
                //   onClick={() => handleNavigation('dashboard')}
                >
               <span className="mr-3 p-2 bg-white border border-gray-300 rounded-lg shadow-md flex items-center"><IonHome/></span> Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className={`flex items-center ${activePage === 'engagement' ? 'text-pink-600' : 'text-gray-600'} hover:text-pink-600`}
                  onClick={() => handleNavigation('engagement')}
                >
                 <span className="mr-3 p-2 bg-white border border-gray-300 rounded-lg shadow-md flex items-center"><CodiconGraph/></span> Client Engagement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center ${activePage === 'recruitment' ? 'text-pink-600' : 'text-gray-600'} hover:text-pink-600`}
                  onClick={() => handleNavigation('recruitment')}
                >
                  <span className="mr-3 p-2 bg-white border border-gray-300 rounded-lg shadow-md flex items-center"><IonCard/></span> Talent Recruitment
                </a>
              </li>
              <li className="relative">  {/* Ensure this has relative positioning */}
  <a
    href="#"
    className={`flex items-center ${activePage === 'recruitment' ? 'text-pink-600' : 'text-gray-600'} hover:text-pink-600 mt-5`}
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  >
    <span className="mr-3 p-2 bg-white border border-gray-300 rounded-lg shadow-md flex items-center">
      ⚙️
    </span> 
    Settings
  </a>

  {/* Dropdown */}
  {isDropdownOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
      <button
        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
        onClick={() => {
          setIsDropdownOpen(false); // Close dropdown
          setIsOpen(true); // Open Profile modal
        }}
      >
        Profile
      </button>
      <button
        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
        onClick={handleLogout} // Assuming you have a function to handle logout
      >
        Logout
      </button>
    </div>
  )}

  {/* Profile Modal */}
  <AccountSettingsModal
    token={token}
    secretKey={secretKey}
    baseUrl={baseUrl}
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}  // Close modal
  />
</li>

            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activePage === 'engagement' && <EngagementTable />}
        {activePage === 'recruitment' && <TalentRecruitmentTable />} {/* Add TalentRecruitmentTable here */}
        {/* Render other components based on activePage */}
      </main>
    </div>
  );
}


export default function ProtectedDashboard() {
    return (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    );
  }