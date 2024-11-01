import Image from "next/image";
import React from "react";

const ImpactCommunity = () => {
  // Array of image data
  const images = [
    {
      id: 1,
      src: "/assets/i30.jpeg",
      alt: "Description of what is happening 1",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at maiores dignissimos dicta, ad quisquam. Eveniet repellat est ut dolorem saepe, ullam numquam, similique ab cupiditate laborum, pariatur accusamus adipisci.",
      text: "Project 1.",
    },
    {
      id: 2,
      src: "/assets/i31.jpg",
      alt: "Description of what is happening 2",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at maiores dignissimos dicta, ad quisquam. Eveniet repellat est ut dolorem saepe, ullam numquam, similique ab cupiditate laborum, pariatur accusamus adipisci.",

      text: "Project 2.",
    },
    {
      id: 3,
      src: "/assets/i32.jpg",
      alt: "Description of what is happening 3",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at maiores dignissimos dicta, ad quisquam. Eveniet repellat est ut dolorem saepe, ullam numquam, similique ab cupiditate laborum, pariatur accusamus adipisci.",
      text: "Project 3.",
    },
    {
      id: 4,
      src: "/assets/i33.png",
      alt: "Description of what is happening 4",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at maiores dignissimos dicta, ad quisquam. Eveniet repellat est ut dolorem saepe, ullam numquam, similique ab cupiditate laborum, pariatur accusamus adipisci.",

      text: "Project 4.",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        <div
          className="relative overflow-hidden group h-[500px] rounded-lg shadow-lg transition-transform transform hover:scale-105"
          key={image.id}
        >
          {/* Image */}
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            className="w-full h-[60%] object-cover transition-transform duration-300"
          />
          {/* Overlay for the image */}
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="p-4 text-center">{image.text}</p>
          </div>
          <div className="p-4">
            <p className="text-black">
              <strong>{image.desc}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactCommunity;
