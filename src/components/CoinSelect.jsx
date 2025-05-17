"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CoinList } from "@/components/CoinList";

function CoinSelect() {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [action, setAction] = useState("buy");
  const [threshold, setThreshold] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [showAlerts, setShowAlerts] = useState(false);
  const coins = CoinList();

  const toggleShowAlerts = async () => {
    const newState = !showAlerts;
    setShowAlerts(newState);

    if (newState) {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Login to view your alerts.");
        return;
      }

      const res = await fetch("/api/alerts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const result = await res.json();
        const mapped = result.alerts.map((alert) => ({
          alert_id: alert.alert_id,
          selectedCoin: alert.coin.name,
          action: alert.floor_price !== null ? "buy" : "sell",
          threshold: alert.floor_price || alert.ceiling_price,
        }));
        setAlerts(mapped);
      } else {
        console.error("Failed to fetch alerts:", await res.text());
      }
    }
  };

  const handleSubmit = async () => {
    if (!selectedCoin || !threshold) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to create alerts.");
      return;
    }

    const res = await fetch("/api/alerts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ selectedCoin, action, threshold }),
    });

    if (res.ok) {
      const newAlert = await res.json();
      setAlerts((prev) => [...prev, { ...newAlert, selectedCoin, action }]);
      setSelectedCoin("");
      setAction("buy");
      setThreshold("");
    } else {
      console.error("Error creating alert:", await res.text());
    }
  };

  const handleDeleteAlert = async (alertId) => {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/alerts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ alert_id: alertId }),
    });

    if (res.ok) {
      setAlerts((prev) => prev.filter((alert) => alert.alert_id !== alertId));
    } else {
      console.error("Failed to delete alert:", await res.text());
    }
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

        {/* Toggle Alerts Button */}
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
              <li key={index} className="flex items-center justify-between text-white bg-gray-900/60 p-2 rounded-md">
                <span>
                  {alert.action.toUpperCase()} <span className="text-purple-400">{alert.selectedCoin}</span> at ${alert.threshold}
                </span>
                <button
                  className="ml-4 bg-red-600 hover:bg-red-500 text-sm px-3 py-1 rounded"
                  onClick={() => handleDeleteAlert(alert.alert_id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CoinSelect;
