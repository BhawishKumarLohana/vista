"use client"
export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black  text-gray-300 font-mono">
        <div className=" sticky bottom-0 items-center justify-between ">
          {/* Logo or App Name */}
          <div className="text-2xl font-bold text-purple-400">
            VISTA<span className="text-green-400">Crypto</span>
          </div>
  
          {/* Navigation or Quick Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-purple-300 transition duration-200">
              About
            </a>
            <a href="#" className="hover:text-purple-300 transition duration-200">
              Features
            </a>
            <a href="#" className="hover:text-purple-300 transition duration-200">
              Docs
            </a>
            <a href="#" className="hover:text-purple-300 transition duration-200">
              Contact
            </a>
          </div>
  
          {/* Social or Legal */}
          <div className="text-xs text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} VISTA. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  