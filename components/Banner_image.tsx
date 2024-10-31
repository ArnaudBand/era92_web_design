import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner_image = () => {
  return (
    <div
      className="drop-shadow-[0_4px_30px_rgba(20,0,0,0.9)] p-6 md:p-12 w-full flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url("/assets/i11.png")` }}
    >
      <div className="bg-black/30 text-white p-8 sm:p-0 md:p-4 lg:p-10 rounded-lg w-full sm:w-5/6 md:w-3/4 lg:w-5/6 lg:mt-10 max-w-4xl shadow-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
          Welcome to Our Watu Care
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-center md:text-left">
          Join us in our mission to empower communities through education,
          support, and vital resources.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <Link
            href="/donate"
            className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm md:text-base shadow-md transition duration-200"
          >
            Make a Difference Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner_image;
