import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password, action } = await req.json();

    if (!email || !password || !["signup", "login"].includes(action)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (action === "signup") {
      if (existingUser) {
        return NextResponse.json({ error: "User already exists" }, { status: 409 });
      }

      const newUser = await prisma.user.create({
        data: { email, password },
      });

      return NextResponse.json({ message: "User created", user: newUser }, { status: 201 });
    }

    if (action === "login") {
      if (!existingUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      if (existingUser.password !== password) {
        return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
      }

      return NextResponse.json({ message: "Login successful", user: existingUser }, { status: 200 });
    }

  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
