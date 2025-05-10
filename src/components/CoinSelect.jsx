// CoinSelect.js
import React, { useEffect, useState } from 'react';

const CoinSelect = () => {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch('/api/getCoins');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const coins = await response.json();
        setAllCoins(coins);
      } catch (error) {
        console.error('Failed to fetch coins:', error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div>
      {allCoins.map((eachCoin) => (
        <p key={eachCoin.coin_id}>{eachCoin.name}</p>
      ))}
    </div>
  );
};

export default CoinSelect;