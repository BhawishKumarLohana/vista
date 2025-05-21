// THIS FILE IS DEPRECIATED THIS IS NOT PART OF OUR PROJECT. THIS WAS MADE TO GENERATE DATA

const { faker } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function generateFakeTrackRecords() {
  try {
    const users = await prisma.user.findMany();
    const coins = await prisma.coin.findMany();

    if (users.length === 0 || coins.length === 0) {
      console.error(' No users or coins found in the database.');
      return;
    }

    for (const user of users) {
      const recordCount = Math.floor(Math.random() * 10) + 1; 

      for (let i = 0; i < recordCount; i++) {
        const coin = coins[Math.floor(Math.random() * coins.length)];
        const price = coin.price || coin.current_price || 1000;
        const base = 100;

        // Calculate realistic coin amount based on price, cap at 500
        let amount = (Math.random() * (base / price));
        amount = Math.min(amount, 500); 
        amount = parseFloat(amount.toFixed(6));

        const trackRecord = {
          amount: amount < 0.000001 ? 0.000001 : amount,
          action: Math.random() > 0.5 ? 'buy' : 'sell',
          datetime: faker.date.recent({ days: 90 }),
          user_id: user.user_id,
          coin_id: coin.coin_id,
        };

        await prisma.trackRecord.create({ data: trackRecord });
      }

      console.log(` Generated ${recordCount} records for user ${user.user_id}`);
    }
  } catch (err) {
    console.error(' Error generating track records:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

generateFakeTrackRecords();
