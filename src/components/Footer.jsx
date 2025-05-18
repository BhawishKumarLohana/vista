"use client"
export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black  text-gray-300 font-mono py-10 px-1 ">
        <div className=" sticky bottom-0 items-center justify-between ">
          {/* Logo or App Name */}
          <div className="text-2xl font-bold text-purple-400">
            VISTA<span className="text-green-400"></span>
          </div>
  
         
  
          {/* Social or Legal */}
          <div className="text-xs text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} VISTA. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  