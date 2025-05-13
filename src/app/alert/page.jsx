"use client";

import { useEffect, useState } from "react";
import CoinSelect from "@/components/CoinSelect";

export default function AlertPage() {
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      setCheckingAuth(false);
    }
  }, []);

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
        <p className="text-white text-lg">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-6">Create Alert</h2>
      <CoinSelect />
    </div>
  );
}
