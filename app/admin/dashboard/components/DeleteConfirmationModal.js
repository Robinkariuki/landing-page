
import React from 'react';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, name }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/3 relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 bg-rose-100 rounded-full p-1"
          onClick={onClose}
        >
          <span className="text-gray-600 text-lg font-bold">×</span>
        </button>

        {/* Confirmation message */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete  {name}?</p>

        {/* Action buttons */}
        <div className="flex justify-end space-x-4">
          <button
            className="text-gray-500 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
