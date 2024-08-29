import React from 'react';

const Popup = ({ isVisible, onClose,position  }) => {
  if (!isVisible) return null;


  const { top = '0', left = '0' } = position || {};

  return (
    <div
    className="fixed z-50"
    style={{ top: position.top, left: position.left }}
  >
    <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        &times;
      </button>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold">Coming Soon...</h2>
      </div>
    </div>
  </div>
  );
};

export default Popup;
