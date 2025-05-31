const axios = require('axios');
const { NextResponse } = require('next/server');

// Initialize Prisma Client
import prisma from "@/lib/db";

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
  }catch(error){
    console.log(error);
    return NextResponse.json({error:error.messages})
  }
}