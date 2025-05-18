import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

// ✅ GET: Fetch user_info
export async function GET(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId } = jwt.verify(token, SECRET);

    const [user] = await prisma.$queryRawUnsafe(
      `SELECT user_info FROM User WHERE user_id = ? LIMIT 1`,
      userId
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.error("Fetch user_info error:", err);
    return NextResponse.json({ error: "Failed to fetch user_info" }, { status: 500 });
  }
}

// ✅ POST: Update user_info
export async function POST(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId } = jwt.verify(token, SECRET);
    const { user_info } = await req.json();

    if (!user_info || typeof user_info !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const result = await prisma.$executeRawUnsafe(
      `UPDATE User SET user_info = ? WHERE user_id = ?`,
      user_info,
      userId
    );

    return NextResponse.json({ success: true, updatedRows: result }, { status: 200 });
  } catch (err) {
    console.error("Update user_info error:", err);
    return NextResponse.json({ error: "Failed to update user_info" }, { status: 500 });
  }
}
