import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function POST(req) {
  const { senderId, receiverId } = await req.json();

  if (!senderId || !receiverId || senderId === receiverId) {
    return NextResponse.json({ error: "Invalid IDs" }, { status: 400 });
  }

  // Check if friend request already exists (both directions)
  const existing = await prisma.$queryRawUnsafe(
    `
    SELECT request_id FROM FriendRequest
    WHERE (sender_id = ? AND receiver_id = ?)
       OR (sender_id = ? AND receiver_id = ?)
    LIMIT 1
    `,
    senderId, receiverId, receiverId, senderId
  );

  if (existing.length > 0) {
    return NextResponse.json({ message: "Friend request already exists." }, { status: 409 });
  }

  // Create new friend request
  const result = await prisma.$executeRawUnsafe(
    `
    INSERT INTO FriendRequest (sender_id, receiver_id)
    VALUES (?, ?)
    `,
    senderId, receiverId
  );

  return NextResponse.json({
    message: "Friend request sent.",
    request: { sender_id: senderId, receiver_id: receiverId },
  });
}
