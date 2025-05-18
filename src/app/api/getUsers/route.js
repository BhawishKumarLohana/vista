import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.$queryRawUnsafe(`
      SELECT user_id, displayName FROM User
    `);

    return NextResponse.json(users);
  } catch (err) {
    console.error("User fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
