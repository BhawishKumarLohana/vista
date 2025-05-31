import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function POST(req) {
  const { user_id } = await req.json(); // receiver ID (current user)

  if (!user_id) {
    return NextResponse.json({ error: "User ID required" }, { status: 400 });
  }

  const receivedRequests = await prisma.$queryRawUnsafe(
    `
    SELECT 
      fr.request_id,
      fr.sender_id,
      fr.receiver_id,
      fr.status,
      fr.timestamp,
      u.user_id AS sender_user_id,
      u.displayName AS sender_displayName
    FROM FriendRequest fr
    JOIN User u ON fr.sender_id = u.user_id
    WHERE fr.receiver_id = ?
      AND fr.status = 'pending'
    ORDER BY fr.timestamp DESC
    `,
    user_id
  );

  // Again we must format it because this is how our front-end treats it
  const formatted = receivedRequests.map(req => ({
    request_id: req.request_id,
    sender_id: req.sender_id,
    receiver_id: req.receiver_id,
    status: req.status,
    timestamp: req.timestamp,
    sender: {
      user_id: req.sender_user_id,
      displayName: req.sender_displayName,
    },
  }));

  return NextResponse.json(formatted);
}

