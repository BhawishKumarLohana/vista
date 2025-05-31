"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useState, useMemo } from "react";

const RANGE_OPTIONS = [

  { label: "30D", value: "30d" },
  { label: "1Y", value: "1y" },
  { label: "All", value: "all" },
];

export default function HistoricalChart({ records }) {
  const [range, setRange] = useState("all");

  const now = useMemo(() => new Date(), []);
  const filteredRecords = useMemo(() => {
    if (!records || records.length === 0) return [];

    let cutoff = new Date(0); // all
    
    if (range === "30d") cutoff = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    else if (range === "1y") cutoff = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

    return records
      .filter((r) => new Date(r.date) >= cutoff)
      .map((r) => ({
        date: new Date(r.date).toLocaleDateString("en-GB"),
        close: r.close,
      }));
  }, [range, records, now]);

  return (
    <div className="rounded-xl shadow-2xl border border-purple-700/30 bg-gradient-to-b from-purple-900/40 to-black/50 p-6">
      {/* Filter Buttons */}
      <div className="flex space-x-3 mb-6">
        {RANGE_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setRange(opt.value)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              range === opt.value
                ? "bg-purple-700 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-purple-600"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredRecords} margin={{ top: 30, right: 40, left: 20, bottom: 40 }}>
          <CartesianGrid stroke="#5B21B6" strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="date" tick={{ fill: "#CBD5E1", fontSize: 12 }} />
          <YAxis tick={{ fill: "#CBD5E1", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E1B4B",
              border: "1px solid #7C3AED",
              borderRadius: "8px",
              color: "#E0E7FF",
            }}
            labelStyle={{ color: "#E0E7FF" }}
          />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#4ADE80"
            strokeWidth={3}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
