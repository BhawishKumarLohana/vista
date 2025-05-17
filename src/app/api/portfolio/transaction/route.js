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

    const user = await prisma.user.findUnique({ where: { email } });
    const coin = await prisma.coin.findFirst({ where: { name: selectedCoin } });

    if (!user || !coin) {
      return Response.json({ error: "Invalid user or coin" }, { status: 404 });
    }

    const existingEntry = await prisma.portfolioEntry.findUnique({
      where: {
        userId_coinId: {
          user_id: user.user_id,
          coin_id: coin.coin_id,
        },
      },
    });

    if (action === "buy") {
      await prisma.portfolioEntry.upsert({
        where: {
          userId_coinId: {
            user_id: user.user_id,
            coin_id: coin.coin_id,
          },
        },
        update: {
          amount: {
            increment: amount,
          },
        },
        create: {
          user_id: user.user_id,
          coin_id: coin.coin_id,
          amount: amount,
        },
      });
    } else if (action === "sell") {
      if (!existingEntry) {
        return Response.json({ error: "You don't own this coin." }, { status: 400 });
      }

      const newAmount = existingEntry.amount - amount;
      if (newAmount > 0) {
        await prisma.portfolioEntry.update({
          where: {
            userId_coinId: {
              user_id: user.user_id,
              coin_id: coin.coin_id,
            },
          },
          data: {
            amount: newAmount,
          },
        });
      } else {
        await prisma.portfolioEntry.delete({
          where: {
            userId_coinId: {
              user_id: user.user_id,
              coin_id: coin.coin_id,
            },
          },
        });
      }
    }

    // ✅ Add record to TrackRecord
    await prisma.trackRecord.create({
      data: {
        user_id: user.user_id,
        coin_id: coin.coin_id,
        amount: amount,
        action: action,
      },
    });

    return Response.json({ message: "Transaction complete." }, { status: 200 });
  } catch (err) {
    console.error("Transaction error:", err);
    return Response.json({ error: "Invalid token or internal error" }, { status: 500 });
  }
}
