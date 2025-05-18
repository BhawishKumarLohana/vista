import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function ShowCoins() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const coins = await prisma.$queryRawUnsafe(`
    SELECT * FROM Coin
  `);

  return coins;
}

export default prisma;
