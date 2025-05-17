import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

export async function GET(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId } = jwt.verify(token, SECRET);
    const user = await prisma.user.findUnique({
      where: { user_id: userId },
      select: {
        user_info: true,
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.error("Fetch user_info error:", err);
    return NextResponse.json({ error: "Failed to fetch user_info" }, { status: 500 });
  }
}

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

    const updatedUser = await prisma.user.update({
      where: { user_id: userId },
      data: { user_info },
    });

    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (err) {
    console.error("Update user_info error:", err);
    return NextResponse.json({ error: "Failed to update user_info" }, { status: 500 });
  }
}

