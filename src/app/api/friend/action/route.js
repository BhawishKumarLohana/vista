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

    const newStatus = action === "accept" ? "accepted" : "declined";

    const result = await prisma.$executeRawUnsafe(
      `UPDATE FriendRequest SET status = ? WHERE request_id = ?`,
      newStatus,
      request_id
    );

    return NextResponse.json({
      success: true,
      updated: { request_id, status: newStatus, affectedRows: result },
    });
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

    const result = await prisma.$executeRawUnsafe(
      `DELETE FROM FriendRequest
       WHERE status = 'accepted'
         AND (
           (sender_id = ? AND receiver_id = ?)
           OR
           (sender_id = ? AND receiver_id = ?)
         )`,
      currentUserId,
      userIdToRemove,
      userIdToRemove,
      currentUserId
    );

    return NextResponse.json({
      success: true,
      deleted: { affectedRows: result },
    });
  } catch (err) {
    console.error("Remove friend error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
