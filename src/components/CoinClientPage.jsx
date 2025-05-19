'use client'

import React, { useState, useEffect } from 'react'
import CustomLineChart from './charts/LineChart'
import CustomBarChart from './charts/BarChart'

export default function CoinClientPage({ coin, historical }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!coin) return <div className="p-8 text-red-500">Coin not found</div>

  const lineChartData = historical.map((h) => ({
    date: new Date(h.date).toISOString().slice(0, 10),
    price: h.close,
  }))

  const latest = historical[historical.length - 1] || {}

  const barChartData = [
    {
      metric: 'Market Cap',
      value: coin.market_cap,
    },
    {
      metric: 'Volume',
      value: latest.volume || 0,
    },
  ]

  return (
    <div className="p-8 text-white max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {coin.name} ({coin.symbol.toUpperCase()})
      </h1>
      <p className="mb-2">Price: ${coin.price.toFixed(2)}</p>
      <p className="mb-8">24h Change: {coin.percent_change_24h}%</p>

      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Price Over Time</h2>
        <CustomLineChart data={lineChartData} dataKey1="price" name1={coin.name} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Market Cap & Volume</h2>
        <CustomBarChart data={barChartData} name1={coin.name} />
      </div>
    </div>
  )
}
