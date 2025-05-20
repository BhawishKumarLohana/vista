"use client"

import React, { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function CustomLineChart({
  data,
  dataKey1,
  dataKey2,
  name1,
  name2,
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Line for coin 1 */}
        {dataKey1 && (
          <Line
            type="monotone"
            dataKey={dataKey1}
            stroke="#8884d8"
            name={name1 || dataKey1}
            dot={false}
          />
        )}

        {/* Line for coin 2 if provided */}
        {dataKey2 && (
          <Line
            type="monotone"
            dataKey={dataKey2}
            stroke="#82ca9d"
            name={name2 || dataKey2}
            dot={false}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  )
}
