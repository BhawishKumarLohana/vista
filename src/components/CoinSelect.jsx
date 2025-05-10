"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

function CoinSelect() {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [action, setAction] = useState("buy");
  const [threshold, setThreshold] = useState("");
  const [alerts,setAlerts] = useState([]);
  const [showAlerts,setShowAlerts] =useState(false);
  const toggleShowAlerts = () => {
    setShowAlerts(!showAlerts);
  };
  useEffect(() => {
    async function fetchCoins() {
      const res = await fetch("/api/coins");
      const data = await res.json();
      setCoins(data);
    }

    fetchCoins();
  }, []);

  const handleSubmit = () => {
    if (!selectedCoin || !threshold) return;
    setAlerts((prev) => [...prev, { selectedCoin, action, threshold }]);
    setSelectedCoin("");

    setAction("buy");
    setThreshold("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-md border border-purple-700">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Coin Dropdown */}
        <div className="w-full">
          <label className="block text-sm font-medium text-purple-300 mb-1">Select a Coin</label>
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
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

        {/* Action Dropdown */}
        <div className="w-full">
          <label className="block text-sm font-medium text-purple-300 mb-1">Action</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        {/* Threshold Input */}
        <div className="w-full">
          <label className="block text-sm font-medium text-purple-300 mb-1">Price Threshold</label>
          <input
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            placeholder="Enter threshold"
            className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white mt-4 md:mt-6 px-6 py-2"
        >
         Alert
        </Button>
        {/* Get Alerts Button */}
      <div className="mt-4 text-right">
        <Button
          onClick={toggleShowAlerts}
          className="bg-purple-700 hover:bg-purple-600 text-white"
        >
          {showAlerts ? "Hide Alerts" : "Get Alerts"}
        </Button>
      </div>

      

      </div>
      {/* Alerts List */}
      {showAlerts && alerts.length > 0 && (
        <div className="mt-6 bg-gray-800/50 border border-purple-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-300 mb-3">Your Alerts</h3>
          <ul className="space-y-2">
            {alerts.map((alert, index) => (
              <li key={index} className="text-white bg-gray-900/60 p-2 rounded-md">
                {alert.action.toUpperCase()} <span className="text-purple-400">{alert.selectedCoin}</span> at ${alert.threshold}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default CoinSelect;
