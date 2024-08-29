import React from 'react';

// Define a Button component
const CustomButton = ({ onClick, text, style, className }) => {
  return (
    <button
      style={{ backgroundColor: "#EB1260", width: "259px", height: "59px", ...style }}
      className={`relative py-2 px-4 rounded-lg text-white font-bold hover:bg-white hover:text-[#EB1260] transition-colors w-full h-full ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;