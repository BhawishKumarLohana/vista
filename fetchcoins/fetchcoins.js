const axios = require('axios');
const { PrismaClient } = require('@prisma/client');

// Initialize Prisma Client
const prisma = new PrismaClient();

// API key directly in the script
const API_KEY = 'd7d7ed92-da9d-45c2-a2be-dbb97f1ee5ee'; 
const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

// Set up headers with your API key
const headers = {
  'X-CMC_PRO_API_KEY': API_KEY,
  Accept: 'application/json'
};

const params = {
  start: '1',
  limit: '50',
  convert: 'USD'
};

async function fetchAndSaveCoins() {
  try {
    // Fetch data from CoinMarketCap API
    const res = await axios.get(url, { headers, params });
    const coins = res.data.data;
    console.log(coins);

    // Process each coin
    for (const coin of coins) {
      const {
        name,
        symbol,
        slug,
        cmc_rank,
        quote,
        last_updated
      } = coin;

      const usd = quote.USD;

      // Upsert the coin data into the database
      await prisma.coin.upsert({
        where: { symbol },
        update: {
          name,
          slug,
          cmc_rank,
          price: usd.price,
          market_cap: usd.market_cap,
          volume_24h: usd.volume_24h,
          percent_change_24h: usd.percent_change_24h,
          percent_change_7d: usd.percent_change_7d,
          last_updated: new Date(last_updated)
        },
        create: {
          name,
          symbol,
          slug,
          cmc_rank,
          price: usd.price,
          market_cap: usd.market_cap,
          volume_24h: usd.volume_24h,
          percent_change_24h: usd.percent_change_24h,
          percent_change_7d: usd.percent_change_7d,
          last_updated: new Date(last_updated)
        }
      });

      console.log(`✅ ${name} (${symbol}) saved.`);
    }

    console.log('🎉 All coins processed.');
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

fetchAndSaveCoins();
