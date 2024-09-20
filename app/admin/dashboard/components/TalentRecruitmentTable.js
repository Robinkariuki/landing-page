"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import { getBaseUrl } from "@/utils/baseUrl";
import Modal from "./popUp"; // Assuming this is your modal component
import { TrashIcon } from "@heroicons/react/24/outline"; // Import delete icon
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { MdiFilterOutline, UiwDate } from "./icons";

const TalentRecruitmentTable = () => {
  const [talents, setTalents] = useState([]);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [engagementToDelete, setEngagementToDelete] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    perPage: 10,
  });
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [sort, setSort] = useState({
    column: "name",
    order: "asc",
  });
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);

  const baseUrl = getBaseUrl();

  const fetchTalents = useCallback(async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/talents`, {
        params: {
          page: pagination.currentPage,
          per_page: pagination.perPage,
          search: searchTerm, // Include the search term in the request
        },
      });
      setTalents(response.data.data);
      setPagination((prev) => ({
        ...prev,
        currentPage: response.data.current_page,
        totalPages: response.data.last_page,
      }));
    } catch (error) {
      console.error("Error fetching talents:", error);
    }
  }, [baseUrl, pagination.currentPage, pagination.perPage, searchTerm]);

  useEffect(() => {
    fetchTalents();
  }, [fetchTalents]);

  useEffect(() => {
    if (talents.length > 0) {
      const sortedTalents = sortTalents([...talents], sort.column, sort.order);
      setTalents(sortedTalents);
    }
  }, [sort]);

  const sortTalents = (data, column, order) => {
    return data.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      return order === "asc"
        ? aValue > bValue
          ? 1
          : -1
        : aValue < bValue
        ? 1
        : -1;
    });
  };

  const handleSortChange = (column) => {
    setSort((prev) => ({
      column,
      order: prev.column === column && prev.order === "asc" ? "desc" : "asc",
    }));
    setSortDropdownOpen(false);
  };

  const handleViewMessage = (talent) => {
    setSelectedTalent(talent);
    setViewModalOpen(true);
  };

  const handleCloseModal = () => {
    setViewModalOpen(false);
    setSelectedTalent(null);
  };

  const handleDeleteEngagement = async () => {
    if (!engagementToDelete) return;

    try {
      await axios.delete(`${baseUrl}/api/engagements/${engagementToDelete.id}`);
      fetchEngagements();
    } catch (error) {
      console.error("Error deleting engagement:", error);
    } finally {
      setDeleteModalOpen(false);
      setEngagementToDelete(null);
    }
  };

  const confirmDeleteEngagement = (engagement) => {
    setEngagementToDelete(engagement);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setEngagementToDelete(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term state
  };

  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, currentPage: newPage }));
  };

  return (
    <div>
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
            value={searchTerm}
            onChange={handleSearchChange}
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
            src={""} // Provide image URL
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Contacts All ({talents.length})
            </h3>
            <div className="flex space-x-4">
              {/* Sort Button with Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center border border-gray-300 rounded-lg px-4 py-2"
                  onClick={() => setSortDropdownOpen(!isSortDropdownOpen)}
                >
                  <MdiFilterOutline className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="text-gray-700">
                    Sort by{" "}
                    {sort.column.charAt(0).toUpperCase() + sort.column.slice(1)}{" "}
                    {sort.order === "asc" ? "↑" : "↓"}
                  </span>
                </button>
                {isSortDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleSortChange("name")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Name
                    </button>
                    <button
                      onClick={() => handleSortChange("email")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Email
                    </button>
                    <button
                      onClick={() => handleSortChange("experience")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Experience
                    </button>
                    <button
                      onClick={() => handleSortChange("date")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Date
                    </button>
                  </div>
                )}
              </div>

              {/* Filter Button */}
              {/* <button className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
      <UiwDate className="w-5 h-5 text-gray-600 mr-2" />
      <span className="text-gray-700">Filter</span>
    </button> */}
            </div>
          </div>

          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">NAME</th>
                <th className="px-4 py-2 text-left">EMAIL</th>
                <th className="px-4 py-2 text-left">RESUME</th>
                <th className="px-4 py-2 text-left">EXPERIENCE(yrs)</th>
                <th className="px-4 py-2 text-left">LINKEDIN</th>
                <th className="px-4 py-2 text-left">PORTFOLIO</th>
                <th className="px-4 py-2 text-left">SPECIALIZATION</th>
                <th className="px-4 py-2 text-left">TECHNICAL SKILLS</th>
                <th className="px-4 py-2 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {talents.map((talent) => (
                <tr key={talent.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{talent.name}</td>
                  <td className="px-4 py-2">{talent.email}</td>
                  <td className="px-4 py-2">
                    <a
                      href={talent.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Link
                    </a>
                  </td>
                  <td className="px-4 py-2">{talent.years_of_experience}</td>
                  <td className="px-4 py-2">
                    <a
                      href={talent.linkedin_profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                    Link
                    </a>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      href={talent.previous_work_portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                    Link
                    </a>
                  </td>

                  <td className="px-4 py-2">{talent.specialization}</td>
                  <td className="px-4 py-2">{talent.technical_skills}</td>

                 
                  <td className="px-4 py-2">
                    <button onClick={() => confirmDeleteEngagement(engagement)}>
                      <TrashIcon className="h-6 w-6 text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <div>
              <select
                value={pagination.perPage}
                onChange={(e) =>
                  setPagination((prev) => ({
                    ...prev,
                    perPage: Number(e.target.value),
                    currentPage: 1,
                  }))
                }
                className="border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span className="ml-2">Items per page</span>
            </div>
            <div>
              <span className="mr-2">
                {pagination.currentPage} of {pagination.totalPages} pages
              </span>
              <button
                onClick={() =>
                  handlePageChange(
                    pagination.currentPage > 1 ? pagination.currentPage - 1 : 1
                  )
                }
                className="p-2 bg-white border border-gray-300 rounded-lg"
                disabled={pagination.currentPage === 1}
              >
                &lt;
              </button>
              <button
                onClick={() =>
                  handlePageChange(
                    pagination.currentPage < pagination.totalPages
                      ? pagination.currentPage + 1
                      : pagination.totalPages
                  )
                }
                className="p-2 bg-white border border-gray-300 rounded-lg ml-2"
                disabled={pagination.currentPage === pagination.totalPages}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* View Modal */}
      {selectedTalent && (
        <Modal
          isOpen={isViewModalOpen}
          onClose={handleCloseModal}
          name={selectedTalent.name}
          message={selectedTalent.message}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={handleDeleteEngagement}
          name={engagementToDelete?.name}
        />
      )}
    </div>
  );
};

export default TalentRecruitmentTable;
