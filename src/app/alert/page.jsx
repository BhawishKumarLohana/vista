'use client';

// pages/alert.js
import CoinSelect from "@/components/CoinSelect"; // Adjust the path if necessary

export default function AlertPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <h2 className="text-3xl font-bold text-white mb-6">Create Alert</h2>
      <CoinSelect />
      {/* Other alert form fields can go here */}
    </div>
  );
}