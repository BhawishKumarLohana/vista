"use client";

import { useState } from "react";
import { CoinList } from "./CoinList"; // assuming this is a hook like useCoinList()

const ITEMS_PER_PAGE = 10;

export default function CoinsTable() {
  const data = CoinList(); // assumed to return an array of coins
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentCoins = data.slice(start, end);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full px-6 py-12 flex flex-col items-center">
      <div className="w-full max-w-5xl ">
        <div className="px-8 py-6 border-b border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 font-mono">
            Live Market Overview
          </h2>
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
              {currentCoins.map((coin) => (
                <tr
                  key={coin.coin_id}
                  className="hover:bg-purple-900/20 transition-all duration-200 border-b border-gray-800"
                >
                  <td className="px-6 py-4">{coin.name}</td>
                  <td className="px-6 py-4 text-green-400 font-semibold">
                    {coin.symbol}
                  </td>
                  <td className="px-6 py-4">{coin.price}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      coin.percent_change_24h > 0
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {coin.percent_change_24h}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 py-6 border-t border-gray-700 bg-black/20">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md border ${
                currentPage === index + 1
                  ? "bg-purple-700 text-white border-purple-500"
                  : "bg-gray-900 text-gray-300 border-gray-700 hover:bg-purple-600 hover:text-white"
              } transition-all duration-200`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
