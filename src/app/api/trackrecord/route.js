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

    const records = await prisma.trackRecord.findMany({
      where: { user_id: userId },
      orderBy: { datetime: "desc" },
      include: { coin: true },
    });

    return NextResponse.json(records); // ✅ return as array directly
  } catch (err) {
    console.error("TrackRecord fetch error:", err);
    return NextResponse.json({ error: "Invalid token or internal error" }, { status: 500 });
  }
}
