import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <div className="bg-[#606676] text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Link
          to="/"
          className="text-xl font-semibold  transition-colors duration-300 font-poppins"
        >
          Home
        </Link>
        <div className="text-2xl font-semibold  animate-bounce font-roboto">
          Hall Details
        </div>
        <Link
          to="/add"
          className="text-xl font-semibold  transition-colors duration-300 font-poppins"
        >
          Add Details
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
