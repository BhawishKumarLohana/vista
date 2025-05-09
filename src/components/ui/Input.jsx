"use client"
export function Input({ className = '', ...props }) {
  return (
    <input
      className={`px-4 py-2 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${className}`}
      {...props}
    />
  );
}
