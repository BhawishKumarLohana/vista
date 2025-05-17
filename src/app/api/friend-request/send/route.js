import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const { senderId, receiverId } = await req.json();

  if (!senderId || !receiverId || senderId === receiverId) {
    return NextResponse.json({ error: "Invalid IDs" }, { status: 400 });
  }

  const existing = await prisma.FriendRequest.findFirst({
    where: {
      OR: [
        { sender_id: senderId, receiver_id: receiverId },
        { sender_id: receiverId, receiver_id: senderId },
      ],
    },
  });

  if (existing) {
    return NextResponse.json({ message: "Friend request already exists." }, { status: 409 });
  }

  const request = await prisma.FriendRequest.create({
    data: {
      sender_id: senderId,
      receiver_id: receiverId,
    },
  });

  return NextResponse.json({ message: "Friend request sent.", request });
}
