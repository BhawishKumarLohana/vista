import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

export async function GET(req) {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId } = jwt.verify(token, SECRET);

    const rawRecords = await prisma.$queryRawUnsafe(
      `
      SELECT 
        tr.track_record_id,
        tr.amount,
        tr.action,
        tr.datetime,
        c.coin_id,
        c.name,
        c.symbol,
        c.price,
        c.percent_change_24h
      FROM TrackRecord tr
      JOIN Coin c ON tr.coin_id = c.coin_id
      WHERE tr.user_id = ?
      ORDER BY tr.datetime DESC
      `,
      userId
    );

    // ⏎ Structure coin data into a nested object
    const records = rawRecords.map((r) => ({
      track_record_id: r.track_record_id,
      amount: r.amount,
      action: r.action,
      datetime: r.datetime,
      coin: {
        coin_id: r.coin_id,
        name: r.name,
        symbol: r.symbol,
        price: r.price,
        percent_change_24h: r.percent_change_24h,
      },
    }));

    return NextResponse.json(records); // ✅ return as array directly
  } catch (err) {
    console.error("TrackRecord fetch error:", err);
    return NextResponse.json({ error: "Invalid token or internal error" }, { status: 500 });
  }
}

