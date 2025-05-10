// pages/api/getCoins.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const coins = await prisma.coin.findMany();
    res.status(200).json(coins);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch coins' });
  } finally {
    await prisma.$disconnect();
  }
}
  