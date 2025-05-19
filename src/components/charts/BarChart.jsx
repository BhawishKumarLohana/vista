"use client"

import React, { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function CustomBarChart({ data, name1, name2 }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="metric" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Bar for first coin */}
        {name1 && (
          <Bar dataKey={name1} fill="#8884d8" />
        )}

        {/* Bar for second coin if exists */}
        {name2 && (
          <Bar dataKey={name2} fill="#82ca9d" />
        )}
      </BarChart>
    </ResponsiveContainer>
  )
}
