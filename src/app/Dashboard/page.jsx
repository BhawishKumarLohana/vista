"use client";

import { useEffect, useState } from "react";
import PortfolioTable from "@/components/PortfolioTable";
import PortfolioPieChart from "@/components/PortfolioPieChart";
import React from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!storedToken || !storedUser) {
      window.location.href = "/login";
      return;
    }

    setUser(JSON.parse(storedUser));

    fetch("/api/portfolio", {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.entries) {
          const formatted = data.entries.map((entry) => ({
            name: entry.coin.name,
            price: `$${entry.coin.price.toFixed(2)}`,
            bought: entry.amount,
            sold: 0,
          }));
          setData(formatted);
        }
      })
      .catch((err) => {
        console.error("Fetch portfolio error:", err);
      })
      .finally(() => setCheckingAuth(false));
  }, []);

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
        <p className="text-white text-lg">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 py-20 px-20 text-white">
      <h2 className="text-3xl font-bold text-center mb-2 mt-10">
        Welcome {user?.email || "User"}!
      </h2>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded mb-6 mt-2"
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Log Out
      </button>

      <PortfolioPieChart data={data} />
      <PortfolioTable Ini_data={data} />
    </div>
  );
}
