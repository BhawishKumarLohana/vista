"use client";
import React from "react";
import { CoinList } from "./CoinList";

function Card({ selectedCoin, setSelectedCoin }) {
  const coins = CoinList();

  return (
    <div className="w-full md:w-1/2 bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
      <label className="block mb-2 text-sm font-medium">Select Coin</label>
      <select
        value={selectedCoin?.name || ""}
        onChange={(e) => {
          const selected = coins.find((c) => c.name === e.target.value);
          setSelectedCoin(selected);
        }}
        className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">-- Choose a coin --</option>
        {coins.map((coin) => (
          <option key={coin.coin_id} value={coin.name}>
            {coin.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Card;
