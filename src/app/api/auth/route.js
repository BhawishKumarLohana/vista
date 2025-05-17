import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

export async function POST(req) {
  try {
    const { email, password, action, username } = await req.json();

    // Basic input validation
    if (!email || !password || !["signup", "login"].includes(action)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (action === "signup") {
      if (existingUser) {
        return NextResponse.json({ error: "User already exists" }, { status: 409 });
      }

      const newUser = await prisma.user.create({
        data: {
          email,
          password,
          displayName: username, 
        },
      });

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
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

