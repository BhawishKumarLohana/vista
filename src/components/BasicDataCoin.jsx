"use client";
import React from "react";

function CoinDetails({ selectedCoin }) {
  if (!selectedCoin) return <div></div>;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-2">{selectedCoin.name}</h2>
      <p>Symbol: {selectedCoin.symbol}</p>
      <p>Price: ${selectedCoin.price}</p>

      <p>Market Cap: ${selectedCoin.market_cap}</p>
      <div className="flex items-center gap-2">
        <p>24 Hour Change:</p>
        <div
            className={`font-semibold ${
            selectedCoin.percent_change_24h >= 0 ? "text-emerald-400" : "text-red-400"
            }`}
        >
            {selectedCoin.percent_change_24h}%
        </div>
        </div>

    </div>
  );
}

export default CoinDetails;
