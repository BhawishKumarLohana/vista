// THIS FILE IS DEPRECIATED THIS IS NOT PART OF OUR PROJECT. THIS WAS MADE TO GENERATE DATA.

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function getRandomFloat(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

async function assignUserAlerts() {
  try {
    const users = await prisma.user.findMany();
    const coins = await prisma.coin.findMany();

    for (const user of users) {
      const alertCount = Math.floor(Math.random() * 3) + 1;
      const shuffledCoins = coins.sort(() => 0.5 - Math.random());
      const selectedCoins = shuffledCoins.slice(0, alertCount);

      for (const coin of selectedCoins) {
        const currentPrice = coin.price;

        if (!currentPrice || currentPrice <= 0) {
          console.warn(` Skipping coin ${coin.coin_id} due to invalid price.`);
          continue;
        }
        const floor = getRandomFloat(currentPrice * 0.9, currentPrice * 0.99);
        const ceiling = getRandomFloat(currentPrice * 1.01, currentPrice * 1.1);

        await prisma.alert.create({
          data: {
            user_id: user.user_id,
            coin_id: coin.coin_id,
            floor_price: floor,
            ceiling_price: ceiling,
          },
        });

        console.log(` Created alert for user ${user.user_id} on coin ${coin.coin_id}: floor ${floor}, ceiling ${ceiling}`);
      }
    }
  } catch (err) {
    console.error(' Error assigning user alerts:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

assignUserAlerts();
