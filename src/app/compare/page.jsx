"use client";
import React, { useState } from "react";
import Card from "@/components/Card";
import CoinDetails from "@/components/BasicDataCoin";

export default function ComparePage() {
  const [selectedCoinLeft, setSelectedCoinLeft] = useState(null);
  const [selectedCoinRight, setSelectedCoinRight] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 py-16 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 mt-20">
        Compare Cryptocurrencies
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Left Card */}
        <Card selectedCoin={selectedCoinLeft} setSelectedCoin={setSelectedCoinLeft} />

        {/* VS Divider */}
        <div className="text-red-500 text-5xl font-extrabold">VS</div>

        {/* Right Card */}
        <Card selectedCoin={selectedCoinRight} setSelectedCoin={setSelectedCoinRight} />
      </div>

      {/* Coin Details Below */}
      <div className="flex flex-col md:flex-row gap-8 justify-center mt-12">
        <CoinDetails selectedCoin={selectedCoinLeft} />
        <CoinDetails selectedCoin={selectedCoinRight} />
      </div>
    </div>
  );
}
