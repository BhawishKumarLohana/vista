
const axios = require('axios');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const API_KEY = '6e858e79b12b98a1cfbaa454def3388637ee274e8dc6b351e8bcf94192adcc6d';
const BASE_URL = 'https://min-api.cryptocompare.com/data/v2/histoday';

async function fetchAndSaveHistorical(coinSymbol, coinId) {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        fsym: coinSymbol,
        tsym: 'USD',
        limit: 2000, 
        api_key: API_KEY,
      },
    });

    const historicalData = res.data.Data.Data;

    for (const entry of historicalData) {
      const date = new Date(entry.time * 1000); // Convert UNIX timestamp to JS Date
      await prisma.historicalCoin.create({
        data: {
          coin_id: coinId,  
          date,
          open: entry.open,
          high: entry.high,
          low: entry.low,
          close: entry.close,
          volume: entry.volumeto,
        },
      });
    }

    console.log(`Historical data for ${coinSymbol} saved.`);
  } catch (err) {
    console.error(` Error fetching data for ${coinSymbol}:`, err.message);
  }
}

async function run() {
  const coins = await prisma.coin.findMany();

  for (const coin of coins) {
    await fetchAndSaveHistorical(coin.symbol, coin.coin_id);
  }

  await prisma.$disconnect();
}

run();
