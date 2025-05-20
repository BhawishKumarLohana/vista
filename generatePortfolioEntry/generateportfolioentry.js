const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function generatePortfolioEntries() {
  try {
    const users = await prisma.user.findMany();
    const coins = await prisma.coin.findMany();

    for (const user of users) {
      for (const coin of coins) {
        // Sum of buy amounts for this user and coin
        const buySum = await prisma.trackRecord.aggregate({
          where: {
            user_id: user.user_id,
            coin_id: coin.coin_id,
            action: 'buy',
          },
          _sum: { amount: true },
        });

        // Sum of sell amounts for this user and coin
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
          // Find existing portfolio entry
          const existingEntry = await prisma.portfolioEntry.findFirst({
            where: {
              user_id: user.user_id,
              coin_id: coin.coin_id,
            },
          });

          if (existingEntry) {
            // Update existing entry
            await prisma.portfolioEntry.update({
              where: { entry_id: existingEntry.entry_id },
              data: { amount: netAmount },
            });
            console.log(`✅ Updated portfolio entry for user ${user.user_id}, coin ${coin.coin_id}, amount: ${netAmount.toFixed(6)}`);
          } else {
            // Create new entry
            await prisma.portfolioEntry.create({
              data: {
                user_id: user.user_id,
                coin_id: coin.coin_id,
                amount: netAmount,
              },
            });
            console.log(`✅ Created portfolio entry for user ${user.user_id}, coin ${coin.coin_id}, amount: ${netAmount.toFixed(6)}`);
          }
        } else {
          // If net amount zero or negative, remove portfolio entry if exists
          const existingEntry = await prisma.portfolioEntry.findFirst({
            where: {
              user_id: user.user_id,
              coin_id: coin.coin_id,
            },
          });

          if (existingEntry) {
            await prisma.portfolioEntry.delete({
              where: {
                entry_id: existingEntry.entry_id,
              },
            });
            console.log(`🗑 Deleted portfolio entry for user ${user.user_id}, coin ${coin.coin_id} due to zero or negative net amount.`);
          }
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
