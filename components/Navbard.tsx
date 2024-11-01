"use client";

import Link from "next/link";
import useModal from "@/hooks/useModal";

export default function Navbar() {
  const { isOpen, closeModal, toggleModal } = useModal();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center border border-spacing-1 border-black/90 rounded-full">
            <Link className="text-black font-bold italic" href="/">
              Watu Care
            </Link>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-6">
            <Link className="text-black" href="/">
              Home
            </Link>
            <Link className="text-black" href="/programs">
              Programs
            </Link>
            <Link className="text-black" href="/donate">
              Donate
            </Link>
          </div>

          {/* Donation Button */}
          <div className="hidden md:block">
            <Link className="text-black bg-blue-300 px-6 py-4 rounded-lg" href="/donate">
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleModal}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-400">
          <div className="px-4 pb-4 flex flex-col items-center space-y-2">
            <Link className="text-black" href="/" onClick={closeModal}>
              Home
            </Link>
            <Link className="text-black" href="/programs" onClick={closeModal}>
              Programs
            </Link>
            <Link className="text-black" href="/donate" onClick={closeModal}>
              Donate
            </Link>
            <Link className="text-black bg-blue-300 px-6 py-4 rounded-lg" href="/donate" onClick={closeModal}>
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
