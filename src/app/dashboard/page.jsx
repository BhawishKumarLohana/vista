"use client";

import { useEffect, useState } from "react";
import PortfolioPieChart from "@/components/PortfolioPieChart";
import { Button } from "@/components/ui/Button";
import { CoinList } from "@/components/CoinList";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [action, setAction] = useState("buy");
  const [amount, setAmount] = useState("");
  const coins = CoinList();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!storedToken || !storedUser) {
      window.location.href = "/login";
      return;
    }

    setUser(JSON.parse(storedUser));
    fetchPortfolio();
  }, []);

const fetchPortfolio = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("/api/portfolio", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const result = await res.json();
    if (result.entries) {
      const formatted = result.entries.map((entry) => ({
        name: entry.coin.name,
        price: `$${entry.coin.price.toFixed(2)}`,
        bought: entry.amount,
        sold: 0,
      }));
      setData(formatted);
    }
  } catch (err) {
    console.error("Portfolio fetch error:", err);
  } finally {
    setCheckingAuth(false); 
  }
};

  const handleTransaction = async () => {
  if (!selectedCoin || !amount) return;
  const token = localStorage.getItem("token");

  const res = await fetch("/api/portfolio/transaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ selectedCoin, action, amount: parseFloat(amount) }),
  });

  if (res.ok) {
    setSelectedCoin("");
    setAction("buy");
    setAmount("");
    fetchPortfolio();
  } else {
    const err = await res.json();
    alert(err.error || "Transaction has failed"); 
  }
};

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
        Welcome {user?.displayName || "User"}!
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

      <div className="w-full max-w-4xl bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-md border border-purple-700 mb-12">
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

          {/* Amount Input */}
          <div className="w-full">
            <label className="block text-sm font-medium text-purple-300 mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <Button
            onClick={handleTransaction}
            className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white mt-4 md:mt-6 px-6 py-2"
          >
            Do Transaction
          </Button>
        </div>
      </div>

      <PortfolioPieChart data={data} />
      {/*<PortfolioTable Ini_data={data} />*/}
    </div>
  );
}
