"use client";

import React, { useState } from "react";
import { programs } from "@/types/index"

interface Program {
   title: string;
   description: string;
   moreInfo: string;
   images: string[];
}

const FeaturedPrograms = () => {
   const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

   const openModal = (program: { title: string; description: string; moreInfo: string; images: string[] }) => setSelectedProgram(program);
   const closeModal = () => setSelectedProgram(null);

   return (
      <section className="text-black">
         <h2 className="text-3xl font-semibold text-center mb-10">Our Programs</h2>
         <div className="flex flex-wrap justify-center gap-10">
            {programs.map((program, index) => (
               <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md p-10 cursor-pointer"
                  onClick={() => openModal(program)}
               >
                  <h3 className="font-semibold text-xl">{program.title}</h3>
                  <p className="mt-2 text-gray-600">{program.description}</p>
               </div>
            ))}
         </div>

         {/* Modal */}
         {selectedProgram && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
               <div className="bg-white rounded-lg p-8 w-11/12 sm:w-3/4 lg:w-1/2 max-w-3xl relative">
                  <button
                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                     onClick={closeModal}
                  >
                     &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4">{selectedProgram.title}</h3>
                  <p className="text-gray-700 mb-4">{selectedProgram.moreInfo}</p>
                  <div className="grid grid-cols-2 gap-4">
                     {selectedProgram.images.map((imgSrc, imgIndex) => (
                        <img
                           key={imgIndex}
                           src={imgSrc}
                           alt={`${selectedProgram.title} image ${imgIndex + 1}`}
                           className="w-full h-32 object-cover rounded"
                        />
                     ))}
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default FeaturedPrograms;
