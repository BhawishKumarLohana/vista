const cron = require('node-cron');
const { PrismaClient } = require('@prisma/client');
const sendAlertEmail = require('./sendEmail');
const prisma = new PrismaClient();

async function checkAlertsAndNotify() {
  const alerts = await prisma.alert.findMany({
    include: {
      user: true,
      coin: true
    }
  });

  for (const alert of alerts) {
    const currentPrice = alert.coin.price;
    const floor = alert.floor_price;
    const ceiling = alert.ceiling_price;

    if (floor && currentPrice <= floor) {
      const message = `📉 ${alert.coin.name} (${alert.coin.symbol}) has dropped to your floor price alert!\n
Current Price: $${currentPrice}
Floor Price: $${floor}

💡 Suggestion: This may be a good opportunity to BUY.`;
      await sendAlertEmail(alert.user.email, 'Buy Opportunity - Crypto Price Alert', message);
      console.log(`📧 Buy alert sent to ${alert.user.email}`);
    } else if (ceiling && currentPrice >= ceiling) {
      const message = `📈 ${alert.coin.name} (${alert.coin.symbol}) has risen to your ceiling price alert!\n
Current Price: $${currentPrice}
Ceiling Price: $${ceiling}

💡 Suggestion: This may be a good opportunity to SELL.`;
      await sendAlertEmail(alert.user.email, 'Sell Opportunity - Crypto Price Alert', message);
      console.log(`📧 Sell alert sent to ${alert.user.email}`);
    }
  }
}

// ⏰ Schedule to run every day at 8:00 AM (server time)
cron.schedule('0 8 * * *', async () => {
  console.log('⏰ Running daily alert check at 8:00 AM');
  await checkAlertsAndNotify();
});
