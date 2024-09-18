import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
// import logo from '/public/images/logo.png'; // Adjust the path to your logo
// import bgImage from '/public/images/square.png'; // Adjust the path to your background image

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          {/* Logo */}
          <div className="mb-6">
            {/* Use the Image component for the logo */}
            <Image src={''} alt="Logo" width={150} height={50} />
          </div>
          {/* Navigation */}
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#" className="flex items-center text-pink-600">
                  <span className="mr-3">🏠</span> Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600 hover:text-pink-600">
                  <span className="mr-3">📊</span> Client Engagement
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-pink-600">
                  <span className="mr-3">👨‍💼</span> Talent Recruitment
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-xl font-semibold">Pages / Client Engagement</h1>
            <h2 className="text-2xl font-bold mt-1">Client Engagement</h2>
          </div>
          {/* Search and Settings */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
            <button className="p-2 bg-white border border-gray-300 rounded-lg">
              <span>⚙️</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md p-6 relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-10">
            <Image 
              src={''}
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Contacts All (56)</h3>
              <div className="flex space-x-4">
                <button className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                  <span>🔍</span>
                </button>
                <button className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                  <span>🗂️</span>
                </button>
              </div>
            </div>

            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">NAME</th>
                  <th className="px-4 py-2 text-left">EMAIL</th>
                  <th className="px-4 py-2 text-left">PHONE</th>
                  <th className="px-4 py-2 text-left">COMPANY</th>
                  <th className="px-4 py-2 text-left">MESSAGE</th>
                  <th className="px-4 py-2 text-left">DATE</th>
                  <th className="px-4 py-2 text-left">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* Example rows */}
                {[...Array(10)].map((_, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">Esthera Jackson</td>
                    <td className="px-4 py-2">alexa@simmmply.com</td>
                    <td className="px-4 py-2">+254 704596</td>
                    <td className="px-4 py-2">Siscom</td>
                    <td className="px-4 py-2">
                      <button className="bg-green-500 text-white px-4 py-1 rounded-full">View</button>
                    </td>
                    <td className="px-4 py-2">16/08/2024</td>
                    <td className="px-4 py-2">...</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <select className="border border-gray-300 rounded-lg px-4 py-2">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
                <span className="ml-2">Items per page</span>
              </div>
              <div>
                <span className="mr-2">1-10 of 200 items</span>
                <button className="p-2 bg-white border border-gray-300 rounded-lg">⬅️</button>
                <button className="p-2 bg-white border border-gray-300 rounded-lg ml-2">➡️</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
