import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

export async function POST(req) {
  try {
    const { email, password, action, username } = await req.json();

    if (!email || !password || !["signup", "login"].includes(action)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Check if user exists
    const [existingUser] = await prisma.$queryRawUnsafe(
      `SELECT * FROM User WHERE email = ? LIMIT 1`,
      email
    );

    if (action === "signup") {
      if (existingUser) {
        return NextResponse.json({ error: "User already exists" }, { status: 409 });
      }

      // Insert new user
      await prisma.$executeRawUnsafe(
        `INSERT INTO User (email, password, displayName) VALUES (?, ?, ?)`,
        email,
        password,
        username
      );

      // Fetch newly created user
      const [newUser] = await prisma.$queryRawUnsafe(
        `SELECT * FROM User WHERE email = ? LIMIT 1`,
        email
      );

      const token = jwt.sign(
        { userId: newUser.user_id, email },
        SECRET,
        { expiresIn: "2h" }
      );

      return NextResponse.json({ user: newUser, token }, { status: 201 });
    }

    if (action === "login") {
      if (!existingUser || existingUser.password !== password) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
      }

      const token = jwt.sign(
        { userId: existingUser.user_id, email },
        SECRET,
        { expiresIn: "2h" }
      );

      return NextResponse.json({ user: existingUser, token }, { status: 200 });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
