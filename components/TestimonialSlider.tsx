"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Thanks to the support from this organization, my family has new opportunities and a brighter future.",
    author: "Alex, Program Participant",
  },
  {
    text: "The workshops gave me skills and confidence to pursue my dream job.",
    author: "Jamie, Workshop Attendee",
  },
  {
    text: "Our community has benefited immensely from the health services provided.",
    author: "Sam, Community Leader",
  },
  {
    text: "I feel empowered and prepared to take on new challenges in life.",
    author: "Taylor, Youth Program Participant",
  },
  {
    text: "The food security program has been a lifeline for us.",
    author: "Chris, Beneficiary",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 4 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 relative">
      <div className="w-full bg-white rounded-lg shadow-md py-4 min-h-[200px] flex flex-col items-center justify-center space-y-4">
        <p className="text-gray-600 italic text-center">
          "{testimonials[currentIndex].text}"
        </p>
        <p className="mt-4 font-bold text-gray-800 text-center">
          - {testimonials[currentIndex].author}
        </p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-700"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-700"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
