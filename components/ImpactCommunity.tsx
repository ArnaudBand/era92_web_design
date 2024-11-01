import Image from "next/image";
import React from "react";

const ImpactCommunity = () => {
  // Array of image data
  const images = [
    {
      id: 1,
      src: "/assets/i30.jpeg",
      alt: "Description of what is happening 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at maiores dignissimos dicta, ad quisquam. Eveniet repellat est ut dolorem saepe, ullam numquam, similique ab cupiditate laborum, pariatur accusamus adipisci.",
      text: "Project 1.",
    },
    {
      id: 2,
      src: "/assets/i31.jpg",
      alt: "Description of what is happening 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at maiores dignissimos dicta, ad quisquam. Eveniet repellat est ut dolorem saepe, ullam numquam, similique ab cupiditate laborum, pariatur accusamus adipisci.",
      text: "Project 2.",
    },
    {
      id: 3,
      src: "/assets/i32.jpg",
      alt: "Description of what is happening 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at maiores dignissimos dicta, ad quisquam. Eveniet repellat est ut dolorem saepe, ullam numquam, similique ab cupiditate laborum, pariatur accusamus adipisci.",
      text: "Project 3.",
    },
    {
      id: 4,
      src: "/assets/i33.png",
      alt: "Description of what is happening 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at maiores dignissimos dicta, ad quisquam. Eveniet repellat est ut dolorem saepe, ullam numquam, similique ab cupiditate laborum, pariatur accusamus adipisci.",
      text: "Project 4.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        <div
          className="relative overflow-hidden group rounded-lg shadow-lg transition-transform transform hover:scale-105"
          key={image.id}
        >
          {/* Image */}
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            className="w-full h-48 md:h-64 lg:h-72 object-cover transition-transform duration-300"
          />
          {/* Overlay for the images*/}
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="p-4 text-center text-sm md:text-base">{image.text}</p>
          </div>
          {/* Description */}
          <div className="p-4 bg-white">
            <p className="text-gray-800 text-xs md:text-sm lg:text-base">
              <strong>{image.desc}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactCommunity;
