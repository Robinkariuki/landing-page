import React from 'react';

const Modal = ({ isOpen, onClose, message, name }) => {
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

        {/* User's name */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{name}</h2>

        {/* Message box */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p>{message || 'No message available'}</p>
        </div>

        {/* Exit button */}
        <div className="flex justify-center">
          <button
            className="text-rose-500 border border-rose-500 px-6 py-2 rounded-full hover:bg-rose-500 hover:text-white transition-colors"
            onClick={onClose}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
