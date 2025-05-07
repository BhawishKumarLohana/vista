"use client"
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}

       
      </body>
    </html>
  );
}
