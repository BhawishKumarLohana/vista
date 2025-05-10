// app/dashboard/page.jsx or components/Dashboard.jsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Dashboard() {
  const [username, setUsername] = useState("User");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    // 🔧 Fetch username and portfolio from DB
    // Example: fetch("/api/user").then(res => res.json()).then(data => { setUsername(data.username); setPortfolio(data.portfolio); })
  }, []);

  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-b from-black via-blue-900 text-white">
      <div className="backdrop-blur-6xl bg-opacity-50"></div>

      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome, <span className="text-purple-300">{username}</span>
      </h1>

      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-purple-200">Your Portfolio</h2>
        {portfolio.length === 0 ? (
          <p className="text-gray-400 text-center">No coins in portfolio yet.</p>
        ) : (
          <table className="w-full text-left table-auto border border-purple-600 rounded-md overflow-hidden backdrop-blur-md bg-black/40">
            <thead className="text-lg border-b border-purple-600">
              <tr>
                <th className="px-6 py-4">Coin</th>
                <th className="px-6 py-4">Symbol</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Current Price</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((coin, index) => (
                <tr key={index} className="hover:bg-purple-900/30 transition-all">
                  <td className="px-6 py-4">{coin.name}</td>
                  <td className="px-6 py-4 text-green-400">{coin.symbol}</td>
                  <td className="px-6 py-4">{coin.quantity}</td>
                  <td className="px-6 py-4">${coin.currentPrice}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Button
                      variant="destructive"
                      className="text-sm px-3 py-1"
                      onClick={() => {
                        // 🔧 Handle delete coin
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="p-6 bg-black/40 backdrop-blur-md border border-purple-600 shadow-lg space-y-4">
          <h3 className="text-xl font-semibold text-purple-300">Add New Coin</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Coin Name (e.g., Ethereum)"
              className="bg-black text-white border border-gray-600"
            />
            <Input
              type="number"
              placeholder="Quantity"
              className="bg-black text-white border border-gray-600"
            />
            <Button
              className="bg-green-600 hover:bg-green-500 text-white px-6"
              onClick={() => {
                // 🔧 Handle add coin to portfolio
              }}
            >
              Add Coin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
