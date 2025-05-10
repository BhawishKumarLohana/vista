"use client";
// components/Navbar.js
import { useState } from 'react';
import GoogleSignInButton from '@/components/GoogleSignInButton';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-30 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center" href="/">
            <img src="/Logo_vista.png" alt="Logo" className="h-22 py-1 px-4 mt-2" onClick={() => window.location.href = "/"}/>
           
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/coins"
                className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md text-2xl font-bold"
              >
                COINS
              </a>
              <a
                href="/compare"
                className="text-white  hover:bg-yellow-500  px-3 py-2 rounded-md text-2xl font-bold"
              >
                COMPARE
              </a>
              <a
                href="/alert"
                className="text-white  hover:bg-yellow-500  px-3 py-2 rounded-md text-2xl font-bold"
              >
                ALERT
              </a>
              <a
                href="/login"
                className="text-white  hover:bg-yellow-500  px-3 py-2 rounded-md text-2xl font-bold"
              >
                LOGIN/SIGNUP
              </a>
              <a
                href="/dashboard"
                className="text-white  hover:bg-yellow-500  px-3 py-2 rounded-md text-2xl font-bold"
              >
                DASHBOARD
              </a>
            
              <a
                href="/"
                className="text-white  rounded-md text-xl"
              >
               
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 transition-transform transform translate-x-0 duration-300 ease-in-out lg:hidden">
          <div className="  h-full p-10 flex flex-col space-y-12 shadow-lg">
            <button
              onClick={toggleMenu}
              className="text-[#ffffff] focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="/"
              className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
            >
              Home
            </a>
            <a
              href="/coin"
              className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
            >
              COIN
            </a>
            <a
              href="/compare"
              className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
            >
              COMPARE
            </a>
            <a
              href="/compare"
              className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
            >
              ALERT
            </a>
            <a
              href="/compare"
              className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
            >
              Login
            </a>
           
          </div>
        </div>
      )}
    </nav>
  );
}