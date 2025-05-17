import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

export async function POST(req) {
  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    const { request_id, action } = await req.json();

    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const decoded = jwt.verify(token, SECRET);

    if (!request_id || !["accept", "reject"].includes(action)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const updated = await prisma.friendRequest.update({
      where: { request_id },
      data: { status: action === "accept" ? "accepted" : "declined" },
    });

    return NextResponse.json({ success: true, updated });
  } catch (err) {
    console.error("Friend request update error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    const { userIdToRemove } = await req.json();

    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const decoded = jwt.verify(token, SECRET);
    const currentUserId = decoded.userId;

    const deleted = await prisma.friendRequest.deleteMany({
      where: {
        status: "accepted",
        OR: [
          { sender_id: currentUserId, receiver_id: userIdToRemove },
          { sender_id: userIdToRemove, receiver_id: currentUserId },
        ],
      },
    });

    return NextResponse.json({ success: true, deleted });
  } catch (err) {
    console.error("Remove friend error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

