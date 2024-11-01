"use client";

import React, { useState } from 'react';
import { programs } from '@/types/index'; // Import the programs array
import Image from 'next/image';

const Programs = () => {
  // State to manage the expanded view
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  // Toggle function for the "More Programs" button
  const togglePrograms = () => {
    setShowAllPrograms(!showAllPrograms);
  };

  // Determine the programs to display based on state
  const programsToShow = showAllPrograms ? programs : programs.slice(0, 3);

  return (
    <div className="container mx-auto p-4 space-y-10">
      {programsToShow.map((program, index) => (
        <div key={index} className="space-y-4">
          {/* Title Section */}
          <h2 className="text-2xl font-bold px-10">{program.title}</h2>
          
          {/* Program Content */}
          <div
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}  md:space-x-8`}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <Image
                src={program.images[1]}
                alt={program.title}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
            
            {/* Text Section */}
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-10 text-lg break-words py-10">{program.moreInfo}</p>
              <div className="flex justify-center items-center">
                <div className='h-20 w-20 text-right rounded-full bg-gradient-to-tr from-blue-50 via-blue-300 to-blue-50 drop-shadow-2xl'></div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* "More Programs" Button */}
      <div className="flex justify-center">
        <button
          onClick={togglePrograms}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          {showAllPrograms ? 'Show Less' : 'More Programs'}
        </button>
      </div>
    </div>
  );
};

export default Programs;
