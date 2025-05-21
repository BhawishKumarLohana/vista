import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

// Fetch user's portfolio with nested coin object
export async function GET(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { userId } = jwt.verify(token, SECRET);

    const rawEntries = await prisma.$queryRawUnsafe(
      `
      SELECT 
        p.entry_id, p.amount, 
        c.coin_id, c.name, c.symbol, c.slug, c.price, 
        c.percent_change_24h, c.market_cap
      FROM PortfolioEntry p
      JOIN Coin c ON p.coin_id = c.coin_id
      WHERE p.user_id = ?
      `,
      userId
    );

    const entries = rawEntries.map((e) => ({
      entry_id: e.entry_id,
      amount: e.amount,
      coin: {
        coin_id: e.coin_id,
        name: e.name,
        symbol: e.symbol,
        slug: e.slug,
        price: e.price,
        percent_change_24h: e.percent_change_24h,
        market_cap: e.market_cap,
      },
    }));

    return NextResponse.json({ entries }, { status: 200 });
  } catch (err) {
    console.error("Portfolio fetch error:", err);
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }
}

//  Add or update a portfolio entry
export async function POST(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { userId } = jwt.verify(token, SECRET);
    const { coin_id, amount } = await req.json();

    if (!coin_id || amount === undefined) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Check if entry already exists
    const [existing] = await prisma.$queryRawUnsafe(
      `
      SELECT entry_id, amount FROM PortfolioEntry
      WHERE user_id = ? AND coin_id = ? LIMIT 1
      `,
      userId,
      coin_id
    );

    let entry;

    if (existing) {
      // Update
      await prisma.$executeRawUnsafe(
        `
        UPDATE PortfolioEntry
        SET amount = amount + ?
        WHERE user_id = ? AND coin_id = ?
        `,
        amount,
        userId,
        coin_id
      );

      entry = {
        entry_id: existing.entry_id,
        user_id: userId,
        coin_id,
        amount: existing.amount + amount,
      };
    } else {
      //  Insert
      await prisma.$executeRawUnsafe(
        `
        INSERT INTO PortfolioEntry (user_id, coin_id, amount)
        VALUES (?, ?, ?)
        `,
        userId,
        coin_id,
        amount
      );

      // Optionally return inserted entry (e.g., fetch again)
      const [newEntry] = await prisma.$queryRawUnsafe(
        `
        SELECT * FROM PortfolioEntry
        WHERE user_id = ? AND coin_id = ?
        ORDER BY entry_id DESC LIMIT 1
        `,
        userId,
        coin_id
      );

      entry = newEntry;
    }

    return NextResponse.json({ entry }, { status: 200 });
  } catch (err) {
    console.error("Add to portfolio error:", err);
    return NextResponse.json({ error: "Invalid token or server error" }, { status: 500 });
  }
}
