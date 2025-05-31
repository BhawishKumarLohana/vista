import { PrismaClient } from '@prisma/client';

let prisma;

if (typeof global !== 'undefined') {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
    global.prisma.$connect(); // optional: eager connect
  }
  prisma = global.prisma;
} else {
  prisma = new PrismaClient();
}


export async function ShowCoins() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const coins = await prisma.$queryRawUnsafe(`
    SELECT * FROM Coin
  `);

  return coins;
}

export default prisma;
