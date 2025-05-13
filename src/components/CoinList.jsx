import { useEffect, useState } from "react";

export function CoinList() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchCoins() {
      try {
        const res = await fetch("/api/coins");
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error("Failed to fetch coins:", err);
      }
    }

    fetchCoins();
  }, []);

  return coins;
}
