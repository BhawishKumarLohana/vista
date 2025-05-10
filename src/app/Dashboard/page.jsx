"use client"
import PortfolioTable from '@/components/PortfolioTable'
import PortfolioPieChart from '@/components/PortfolioPieChart';
import React from 'react'
function page() {
    const initialData = [
      {
        name: "Bitcoin",
        price: "$61,000",
        bought: 1.2,
        sold: 0.5,
      },
      {
        name: "Ethereum",
        price: "$3,200",
        bought: 5,
        sold: 1,
      },
    ];
  return (
    <div>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 py-20 px-20">
            <div className="w-full max-w-full">
                <h2 className="text-3xl font-bold text-white text-center mb-6  mt-20">Your Portfolio</h2>
                    <PortfolioPieChart data={initialData}/>
                    <PortfolioTable Ini_data={initialData}/>
        </div>
        </div>
    
    </div>
  )
}

export default page