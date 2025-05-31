"use client";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/vistalogo.png"
              alt="Logo"
              className="h-30 py-1 px-4 mt-2 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { href: "/dashboard", label: "DASHBOARD" },
                { href: "/coins", label: "COINS" },
                { href: "/compare", label: "COMPARE" },
                { href: "/alert", label: "ALERT" },
                { href: "/login", label: "LOGIN" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md text-2xl font-bold"
                >
                  {item.label}
                </a>
              ))}
              <a href="/profile" className="text-white rounded-md text-xl">
                <FaUser /> 
              </a>
            </div>
          </div>

          {/* Mobile Menu  */}
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

      {/* Mobile Menu  */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={closeMenu}
          />
          <div className="fixed inset-0 z-50 p-10 bg-[#111] flex flex-col space-y-8">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={closeMenu}
                className="text-white focus:outline-none"
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
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center">
              <img
                src="/vistalogo-removebg-preview.png"
                alt="Logo"
                className="h-16 cursor-pointer"
                onClick={() => {
                  closeMenu();
                  window.location.href = "/";
                }}
              />
            </div>

            {/* Mobile Menu  */}
            {[
              { href: "/dashboard", label: "DASHBOARD" },
              { href: "/coins", label: "COINS" },
              { href: "/compare", label: "COMPARE" },
              { href: "/alert", label: "ALERT" },
              { href: "/login", label: "LOGIN" },
              { href: "/profile", label: <FaUser /> },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-white text-2xl font-bold hover:text-yellow-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}
