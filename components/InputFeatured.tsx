"use client";

import React, { useState } from "react";

interface InputFeaturedProps {
  label: string;
  type?: "text" | "email" | "number" | "tel" | "password";
  name?: string;
  className?: string;
  isTextarea?: boolean;
  value: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const InputFeatured: React.FC<InputFeaturedProps> = ({
  label,
  type = "text",
  className = "",
  name,
  isTextarea = false,
  value,
  onChange,
}) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleValidation = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const inputValue = e.target.value;

    // Simple validation based on type
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValid(emailRegex.test(inputValue));
    } else if (type === "number") {
      setIsValid(!isNaN(Number(inputValue)));
    } else {
      // For text, tel, and password, check if the field is not empty
      setIsValid(inputValue.trim() !== "");
    }

    // Call the external onChange handler if provided
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      <label className="relative flex items-center">
        {isTextarea ? (
          <textarea
            value={value}
            onChange={handleValidation}
            required
            className={`px-6 h-24 py-4 ${className} text-lg ${
              isValid ? "bg-green-100" : "bg-red-100"
            } border rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500 focus:text-black transition duration-200`}
          />
        ) : (
          <input
            type={type}
            value={value}
            name={name}
            onChange={handleValidation}
            required
            className={`px-6 h-10 ${className} text-lg ${
              isValid ? "bg-green-300/50" : "bg-white"
            } border rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500 focus:text-black transition duration-200`}
          />
        )}
        <span className="text-lg text-black text-opacity-80 absolute top-0 left-0 mx-4 py-1 px-2 transition duration-200 input-text">
          {label}
        </span>
      </label>
    </div>
  );
};

export default InputFeatured;