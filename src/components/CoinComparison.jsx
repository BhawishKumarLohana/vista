'use client'

import React, { useState, useEffect } from 'react'
import CustomLineChart from './charts/LineChart'
import CustomBarChart from './charts/BarChart'

export default function CoinComparison({ initialCoin1 = 'bitcoin', initialCoin2 = 'ethereum' }) {
  const [coin1, setCoin1] = useState(initialCoin1)
  const [coin2, setCoin2] = useState(initialCoin2)
  const [coinOptions, setCoinOptions] = useState([]) // Dynamic dropdown
  const [historicalData, setHistoricalData] = useState([])
  const [comparisonData, setComparisonData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch all coins for dropdown
    async function fetchCoins() {
      const res = await fetch('/api/coinsData') // You must create this route
      const data = await res.json()
      setCoinOptions(data)
    }

    fetchCoins()
  }, [])

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await fetch(`/api/historical-comparison?coin1=${coin1}&coin2=${coin2}`)
        const json = await res.json()

        const d1 = json.coin1.data
        const d2 = json.coin2.data

        const merged = d1.map((d, i) => ({
          date: d.date,
          [json.coin1.slug]: d.close,
          [json.coin2.slug]: d2[i]?.close || null,
        }))
        setHistoricalData(merged)

        setComparisonData([
          {
            metric: 'Market Cap',
            [json.coin1.slug]: json.coin1.marketCap,
            [json.coin2.slug]: json.coin2.marketCap,
          },
          {
            metric: 'Volume (Latest)',
            [json.coin1.slug]: d1[d1.length - 1]?.volume,
            [json.coin2.slug]: d2[d2.length - 1]?.volume,
          },
        ])
      } catch (err) {
        console.error('Error fetching coin data:', err)
      }
      setLoading(false)
    }

    fetchData()
  }, [coin1, coin2])

  return (
    <div className="space-y-12 w-full max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-white text-2xl font-bold text-center">Compare {coin1} vs {coin2}</h2>

      {/* Coin selection dropdowns */}
      <div className="flex gap-4 justify-center">
        <select value={coin1} onChange={(e) => setCoin1(e.target.value)} className="p-2 rounded">
          {coinOptions.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
        <select value={coin2} onChange={(e) => setCoin2(e.target.value)} className="p-2 rounded">
          {coinOptions.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <>
          <CustomLineChart
            data={historicalData}
            dataKey1={coin1}
            dataKey2={coin2}
            name1={coin1}
            name2={coin2}
          />

          <CustomBarChart
            data={comparisonData}
            name1={coin1}
            name2={coin2}
          />
        </>
      )}
    </div>
  )
}
