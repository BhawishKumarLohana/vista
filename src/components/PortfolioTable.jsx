"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function PortfolioTable({ Ini_data }) {
  const [portfolio, setPortfolio] = useState(Ini_data);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValues, setEditedValues] = useState({ bought: "", sold: "" });

  const handleEditClick = (idx) => {
    setEditingIndex(idx);
    setEditedValues({
      bought: portfolio[idx].bought,
      sold: portfolio[idx].sold,
    });
  };

  const handleSaveClick = (idx) => {
    const updated = [...portfolio];
    updated[idx].bought = parseFloat(editedValues.bought);
    updated[idx].sold = parseFloat(editedValues.sold);
    setPortfolio(updated);
    setEditingIndex(null);
  };

  const handleCancelClick = () => {
    setEditingIndex(null);
  };

  const handleDeleteClick = (idx) => {
    const updated = portfolio.filter((_, i) => i !== idx);
    setPortfolio(updated);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 bg-black/50 p-6 rounded-xl shadow-md border border-purple-700">
      <h2 className="text-2xl font-semibold text-purple-300 mb-6">Your Portfolio</h2>

      <table className="w-full text-white border border-gray-700 rounded-md overflow-hidden">
        <thead className="bg-purple-800 text-left">
          <tr>
            <th className="p-3">Coin</th>
            <th className="p-3">Current Price</th>
            <th className="p-3">Bought</th>
            <th className="p-3">Sold</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900/60">
          {portfolio.map((coin, idx) => (
            <tr key={idx} className="border-t border-gray-700">
              <td className="p-3">{coin.name}</td>
              <td className="p-3">{coin.price}</td>

              <td className="p-3">
                {editingIndex === idx ? (
                  <input
                    type="number"
                    value={editedValues.bought}
                    onChange={(e) => setEditedValues({ ...editedValues, bought: e.target.value })}
                    className="bg-gray-800 text-white px-2 py-1 rounded border border-purple-500 w-20"
                  />
                ) : (
                  coin.bought
                )}
              </td>

              <td className="p-3">
                {editingIndex === idx ? (
                  <input
                    type="number"
                    value={editedValues.sold}
                    onChange={(e) => setEditedValues({ ...editedValues, sold: e.target.value })}
                    className="bg-gray-800 text-white px-2 py-1 rounded border border-purple-500 w-20"
                  />
                ) : (
                  coin.sold
                )}
              </td>

              <td className="p-3 flex gap-2 justify-center items-center">
                {editingIndex === idx ? (
                  <>
                    <Button
                      onClick={() => handleSaveClick(idx)}
                      className="text-sm bg-green-600 hover:bg-green-500"
                    >
                      Save
                    </Button>
                    <Button
                      onClick={handleCancelClick}
                      className="text-sm bg-gray-600 hover:bg-gray-500"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(idx)}
                      className="text-sm bg-red-600 hover:bg-red-500"
                    >
                      Delete
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => handleEditClick(idx)}
                    variant="outline"
                    className="text-sm text-purple-300 border-purple-500 hover:bg-purple-700"
                  >
                    Update
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
