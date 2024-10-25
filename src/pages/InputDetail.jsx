import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AppBar from '../components/App';
import Footer from '../components/Foot';
import Swal from 'sweetalert2'

const FormComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    currentHostel: '',
    currentRoom: '',
    allotedHostel: '',
    allotedRoom: '',
    rollNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://roomallocationsystem.onrender.com/api/addDetail', {
        name: formData.name,
        contact: formData.contact,
        currentHostel: formData.currentHostel,
        currentRoom: formData.currentRoom,
        allotedHostel: formData.allotedHostel,
        allotedRoom: formData.allotedRoom,
        rollNumber: formData.rollNumber
      });
      // alert(`${res.data.msg}`);
      let icon='success';
      if(res.data.status===400){
        icon='info'
      }
      Swal.fire({
        title: "Add New",
        text : `${res.data.msg}`,
        icon : icon
      })
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
    <AppBar></AppBar>
    <div className="max-w-lg mx-auto">
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
            Contact
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div>
          <label htmlFor="currentHostel" className="block text-sm font-medium text-gray-700">
            Current Hostel
          </label>
          <input
            id="currentHostel"
            name="currentHostel"
            type="text"
            required
            value={formData.currentHostel}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div>
          <label htmlFor="currentRoom" className="block text-sm font-medium text-gray-700">
            Current Room
          </label>
          <input
            id="currentRoom"
            name="currentRoom"
            type="text"
            required
            value={formData.currentRoom}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div>
          <label htmlFor="allotedHostel" className="block text-sm font-medium text-gray-700">
            Allotted Hostel
          </label>
          <input
            id="allotedHostel"
            name="allotedHostel"
            type="text"
            required
            value={formData.allotedHostel}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div>
          <label htmlFor="allotedRoom" className="block text-sm font-medium text-gray-700">
            Allotted Room
          </label>
          <input
            id="allotedRoom"
            name="allotedRoom"
            type="text"
            required
            value={formData.allotedRoom}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div>
          <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700">
            Roll Number
          </label>
          <input
            id="rollNumber"
            name="rollNumber"
            type="text"
            required
            value={formData.rollNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
          <button
            onClick={() => {
              navigate('/');
            }}
            type="button"
            className="ml-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    <br />
    <br />

    <Footer ></Footer>
    </>
  );
};

export default FormComponent;
