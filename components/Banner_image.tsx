import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner_image = () => {
   return (
      <div
         className="drop-shadow-[0_4px_30px_rgba(20,0,0,0.9)] p-6 md:p-12 w-full flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center"
         style={{ backgroundImage: `url("/assets/i11.png")` }}
      >
         <div className="bg-black/20 text-white p-8 md:p-4 lg:p-20 rounded-lg w-full sm:w-5/6 md:w-3/4 lg:w-5/6 lg:mt-10 max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
               Welcome to our non-profit
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-center md:text-left">
               Our mission is to empower communities through education, support,
               and resources.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
               <Link href="/donate" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm md:text-base">
                     Learn More
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Banner_image;
