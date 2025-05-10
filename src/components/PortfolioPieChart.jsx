"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#8b5cf6", "#22d3ee", "#facc15", "#f87171", "#34d399"];

export default function PortfolioPieChart({ data }) {
  const chartData = data.map((coin) => ({
    name: coin.name,
    value: coin.bought - coin.sold,
  }));

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 bg-black/40 p-6 rounded-xl border border-purple-600 shadow-md">
      <h2 className="text-2xl font-semibold text-purple-300 text-center mb-6">Portfolio Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
