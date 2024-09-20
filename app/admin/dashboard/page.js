'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import EngagementTable from './components/engagementTable';
import TalentRecruitmentTable from './components/TalentRecruitmentTable'; // Import the TalentRecruitmentTable component

export default function Dashboard() {
  const [activePage, setActivePage] = useState('dashboard'); // State to manage the active page

  const handleNavigation = (page) => {
    setActivePage(page);
  };

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
                  onClick={() => handleNavigation('dashboard')}
                >
                  <span className="mr-3">🏠</span> Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className={`flex items-center ${activePage === 'engagement' ? 'text-pink-600' : 'text-gray-600'} hover:text-pink-600`}
                  onClick={() => handleNavigation('engagement')}
                >
                  <span className="mr-3">📊</span> Client Engagement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center ${activePage === 'recruitment' ? 'text-pink-600' : 'text-gray-600'} hover:text-pink-600`}
                  onClick={() => handleNavigation('recruitment')}
                >
                  <span className="mr-3">👨‍💼</span> Talent Recruitment
                </a>
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
