import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const { user_id } = await req.json(); // current user ID (the receiver)

  if (!user_id) {
    return NextResponse.json({ error: "User ID required" }, { status: 400 });
  }

  const receivedRequests = await prisma.friendRequest.findMany({
    where: {
      receiver_id: user_id,
      status: "pending", // optional: only show unaccepted
    },
    include: {
      sender: {
        select: {
          user_id: true,
          displayName: true,
        },
      },
    },
    orderBy: {
      timestamp: "desc",
    },
  });

  return NextResponse.json(receivedRequests);
}
