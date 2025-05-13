import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key"; 

// ✅ GET: Fetch user's portfolio
export async function GET(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { userId } = jwt.verify(token, SECRET);

    const entries = await prisma.portfolioEntry.findMany({
      where: { user_id: userId },
      include: {
        coin: true, // includes coin name, price, etc.
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (err) {
    console.error("Portfolio fetch error:", err);
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }
}

// ✅ POST: Add or update a portfolio entry
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

    const entry = await prisma.portfolioEntry.upsert({
      where: {
        userId_coinId: { 
          user_id: userId,
          coin_id: coin_id,
        },
      },
      update: {
        amount: {
          increment: amount,
        },
      },
      create: {
        user_id: userId,
        coin_id: coin_id,
        amount: amount,
      },
    });

    return NextResponse.json({ entry }, { status: 200 });
  } catch (err) {
    console.error("Add to portfolio error:", err);
    return NextResponse.json({ error: "Invalid token or server error" }, { status: 500 });
  }
}

