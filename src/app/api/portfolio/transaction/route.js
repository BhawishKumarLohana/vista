import prisma from "@/lib/db";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

export async function POST(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { email } = jwt.verify(token, SECRET);
    const { selectedCoin, action, amount } = await req.json();

    if (!selectedCoin || !action || !amount || amount <= 0) {
      return Response.json({ error: "Missing or invalid input" }, { status: 400 });
    }

    //  Get user
    const [user] = await prisma.$queryRawUnsafe(
      `SELECT user_id FROM User WHERE email = ? LIMIT 1`,
      email
    );

    //  Get coin
    const [coin] = await prisma.$queryRawUnsafe(
      `SELECT coin_id FROM Coin WHERE name = ? LIMIT 1`,
      selectedCoin
    );

    if (!user || !coin) {
      return Response.json({ error: "Invalid user or coin" }, { status: 404 });
    }

    const userId = user.user_id;
    const coinId = coin.coin_id;

    // Check existing portfolio entry
    const [existingEntry] = await prisma.$queryRawUnsafe(
      `SELECT amount FROM PortfolioEntry WHERE user_id = ? AND coin_id = ? LIMIT 1`,
      userId,
      coinId
    );

    if (action === "buy") {
      if (existingEntry) {
        //  Update (increment amount)
        await prisma.$executeRawUnsafe(
          `UPDATE PortfolioEntry SET amount = amount + ? WHERE user_id = ? AND coin_id = ?`,
          amount,
          userId,
          coinId
        );
      } else {
        // ➕ Insert
        await prisma.$executeRawUnsafe(
          `INSERT INTO PortfolioEntry (user_id, coin_id, amount) VALUES (?, ?, ?)`,
          userId,
          coinId,
          amount
        );
      }
    } else if (action === "sell") {
      if (!existingEntry) {
        return Response.json({ error: "You don't own this coin." }, { status: 400 });
      }

      const newAmount = existingEntry.amount - amount;

      if (newAmount > 0) {
        await prisma.$executeRawUnsafe(
          `UPDATE PortfolioEntry SET amount = ? WHERE user_id = ? AND coin_id = ?`,
          newAmount,
          userId,
          coinId
        );
      } else {
        await prisma.$executeRawUnsafe(
          `DELETE FROM PortfolioEntry WHERE user_id = ? AND coin_id = ?`,
          userId,
          coinId
        );
      }
    }

    //  Log transaction
    await prisma.$executeRawUnsafe(
      `INSERT INTO TrackRecord (user_id, coin_id, amount, action) VALUES (?, ?, ?, ?)`,
      userId,
      coinId,
      amount,
      action
    );

    return Response.json({ message: "Transaction complete." }, { status: 200 });
  } catch (err) {
    console.error("Transaction error:", err);
    return Response.json({ error: "Invalid token or internal error" }, { status: 500 });
  }
}
