// pages/api/getCoins.js
import prisma from "@/lib/db";

export default async function handler(req, res) {
  try {
    const coins = await prisma.$queryRawUnsafe(`
      SELECT * FROM Coin
    `);
    res.status(200).json(coins);
  } catch (error) {
    console.error("Failed to fetch coins:", error);
    res.status(500).json({ error: "Failed to fetch coins" });
  } finally {
    await prisma.$disconnect();
  }
}
