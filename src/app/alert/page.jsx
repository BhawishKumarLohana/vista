'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function AlertPage() {
  const [coin, setCoin] = useState('');
  const [threshold, setThreshold] = useState('');
  const [alerts, setAlerts] = useState([]);

  const handleAddAlert = () => {
    if (!coin || !threshold) return;

    setAlerts([...alerts, { coin, threshold }]);
    setCoin('');
    setThreshold('');
  };

  const handleDelete = (index) => {
    const newAlerts = [...alerts];
    newAlerts.splice(index, 1);
    setAlerts(newAlerts);
  };

  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-b from-black via-blue-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-tight">
        Price Alerts
      </h1>

      <div className="max-w-3xl mx-auto mb-12 bg-black/30 border border-blue-500/20 backdrop-blur-lg rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <Input
            type="text"
            placeholder="Enter coin name (e.g., BTC)"
            className="w-full md:w-1/3 bg-black/40 text-white border border-gray-600 backdrop-blur-sm"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Set price threshold"
            className="w-full md:w-1/3 bg-black/40 text-white border border-gray-600 backdrop-blur-sm"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
          />
          <Button className="bg-green-600 hover:bg-green-500 text-white px-6" onClick={handleAddAlert}>
            Add Alert
          </Button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {alerts.length === 0 && (
          <p className="text-center text-gray-400 text-xl">No alerts added yet.</p>
        )}

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-black/40 border border-purple-500/30 px-6 py-4 backdrop-blur-md shadow-md rounded-lg"
          >
            <div>
              <h2 className="text-xl font-semibold text-purple-300">{alert.coin.toUpperCase()}</h2>
              <p className="text-gray-400">Threshold: ${alert.threshold}</p>
            </div>
            <Button
              variant="ghost"
              className="text-red-400 hover:text-red-600"
              onClick={() => handleDelete(index)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>

  );
}
