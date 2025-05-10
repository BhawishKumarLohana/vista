"use client";

import { useEffect, useState } from "react";

function CoinSelect({ selectedCoin, setSelectedCoin }) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchCoins() {
      const res = await fetch("/api/coins");
      const data = await res.json();
      setCoins(data);
    }

    fetchCoins();
  }, []);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-purple-300 mb-2">Select a Coin</label>
      <select
        value={selectedCoin}
        onChange={(e) => setSelectedCoin(e.target.value)}
        className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">-- Choose a coin --</option>
        {coins.map((coin) => (
          <option key={coin.coin_id} value={coin.name}>
            {coin.name} (${coin.price})
          </option>
        ))}
      </select>
    </div>
  );
}

export default CoinSelect;
