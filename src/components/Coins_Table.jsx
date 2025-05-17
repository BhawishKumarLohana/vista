"use client";
import Link from 'next/link';
import React, { useEffect, useState } from "react";

export default function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch("/api/coins");
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Failed to fetch coin data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCoins();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center text-purple-300 font-mono py-20">
        Loading coin data...
      </div>
    );
  }

  return (
    <div className="w-full px-6 py-12 flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-gray-950">
      <div className="w-full max-w-5xl bg-gradient-to-br from-gray-800 via-black to-gray-900 border border-gray-700 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 font-mono mb-4">
            Live Market Overview
          </h2>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by coin name or symbol..."
            className="w-full md:w-1/2 px-4 py-2 bg-black text-white border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm md:text-base text-gray-300 font-mono">
            <thead className="bg-black/30">
              <tr>
                <th className="px-6 py-5 text-purple-300 tracking-wider">Name</th>
                <th className="px-6 py-5 text-purple-300 tracking-wider">Symbol</th>
                <th className="px-6 py-5 text-purple-300 tracking-wider">Price</th>
                <th className="px-6 py-5 text-purple-300 tracking-wider">24h Change</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin, index) => (
                <tr
                  key={index}
                  className="hover:bg-purple-900/20 transition-all duration-200 border-b border-gray-800"
                >
                  <td className="px-6 py-4 text-purple-300 hover:underline">
                    <Link href={`/coins/${coin.coin_id}`}>
                      {coin.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-green-400 font-semibold">
                    {coin.symbol}
                  </td>
                  <td className="px-6 py-4">${coin.price}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      coin.percent_change_24h >= 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {coin.percent_change_24h}%
                  </td>
                </tr>
              ))}
              {filteredCoins.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-red-400">
                    No matching coins found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
