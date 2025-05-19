const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function generatePortfolioEntries() {
  try {
    const users = await prisma.user.findMany();
    const coins = await prisma.coin.findMany();

    for (const user of users) {
      for (const coin of coins) {
        // Sum of buy amounts
        const buySum = await prisma.trackRecord.aggregate({
          where: {
            user_id: user.user_id,
            coin_id: coin.coin_id,
            action: 'buy',
          },
          _sum: { amount: true },
        });

        // Sum of sell amounts
        const sellSum = await prisma.trackRecord.aggregate({
          where: {
            user_id: user.user_id,
            coin_id: coin.coin_id,
            action: 'sell',
          },
          _sum: { amount: true },
        });

        const totalBought = buySum._sum.amount || 0;
        const totalSold = sellSum._sum.amount || 0;

        const netAmount = totalBought - totalSold;

        if (netAmount > 0) {
          // Upsert portfolio entry (create if not exists, else update)
          await prisma.portfolioEntry.upsert({
            where: {
              user_id_coin_id: {
                user_id: user.user_id,
                coin_id: coin.coin_id,
              },
            },
            update: {
              amount: netAmount,
            },
            create: {
              user_id: user.user_id,
              coin_id: coin.coin_id,
              amount: netAmount,
            },
          });
          console.log(`✅ PortfolioEntry updated/created for user ${user.user_id}, coin ${coin.coin_id}, amount: ${netAmount.toFixed(6)}`);
        }
      }
    }
  } catch (err) {
    console.error('❌ Error generating portfolio entries:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

generatePortfolioEntries();
