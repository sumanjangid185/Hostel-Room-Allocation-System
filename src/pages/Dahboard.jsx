import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentCard from '../components/Card';
import { useNavigate } from 'react-router-dom';
import AppBar from '../components/App';
import Footer from '../components/Foot';

export default function Home() {
  const [student, setStudent] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://roomallocationsystem.onrender.com/api/bulk?filter=${filter}`).then((res) => {
      setStudent(res.data.data);
      setLoading(false)
    });
    // setLoading(false);
  }, [filter]);

  
  return (
    <>
      <AppBar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-row">
          <input
            type="text"
            className="mb-4 p-2 mr-2 mt-4 border border-gray-300 rounded h-12"
            placeholder="Search with room no."
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
        <button
          title="Add New"
          className="group cursor-pointer outline-none hover:rotate-90 duration-300 "
          onClick={() => {
            navigate('/add');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-purple-400 fill-none group-hover:fill-purple-800 group-active:stroke-purple-200 group-active:fill-green-600 group-active:duration-0 duration-300"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              strokeWidth="1.5"
            ></path>
            <path d="M8 12H16" strokeWidth="1.5"></path>
            <path d="M12 16V8" strokeWidth="1.5"></path>
          </svg>
        </button>
        {loading ? <div className="flex justify-center items-center h-screen">
  <div className="flex items-center space-x-2">
    <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
    <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
    <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce animation-delay-400"></div>
    <span className="text-lg font-semibold text-purple-600">Loading...</span>
  </div>
</div>: <div className="flex flex-wrap w-full justify-center">
          {student.map((ele) => (
            <div
              key={ele.rollNumber}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex  justify-center"
            >
              {/* <div className="w-full flex justify-center items-center h-80  flex-shrink-0"> */}
                <StudentCard student={ele} />
              {/* </div> */}
            </div>
          ))}
        </div> }
      </div>
      <Footer />
    </>
  );
}
