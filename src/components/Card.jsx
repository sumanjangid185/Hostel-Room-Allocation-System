import React, { useState, useEffect } from 'react';

const StudentCard = ({ student }) => {


  
    // const colors = ['red-500', 'blue-500', 'green-500', 'indigo-500', 'purple-500', 'pink-500', 'yellow-500', 'teal-500'];
   

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl hover:bg-blue-50">
      <div className={`p-4 bg-purple-500`}>
        <h1 className="text-2xl font-bold text-white animate-wiggle">{student.name}</h1>
        <p className="">Roll Number: {student.rollNumber}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 mt-2"><span className="font-semibold">Contact:</span> {student.contact}</p>
        <h2 className="text-gray-700 mt-2"><span className="font-semibold">Current Hostel:</span> {student.currentHostel}, {student.currentRoom.toUpperCase()}</h2>
        <h2 className="text-gray-700 mt-2"><span className="font-semibold">Allotted Hostel:</span> {student.allotedHostel}, {student.allotedRoom.toUpperCase()}</h2>
        {/* <button
          className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Edit
        </button> */}
      </div>
    </div>
  );
}

export default StudentCard;
