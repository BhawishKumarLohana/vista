// app/api/friend/[id]/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req, { params }) {
  const userId = parseInt(params.id);

  if (!userId || isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { user_id: userId },
      select: {
        user_id: true,
        email: true,
        displayName: true,
        user_info: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const friends = await prisma.friendRequest.findMany({
      where: {
        status: "accepted",
        OR: [
          { sender_id: userId },
          { receiver_id: userId },
        ],
      },
      include: {
        sender: true,
        receiver: true,
      },
    });

    const friendList = friends.map((req) => {
      const friend = req.sender_id === userId ? req.receiver : req.sender;
      return {
        user_id: friend.user_id,
        displayName: friend.displayName,
        email: friend.email,
      };
    });

    const logs = await prisma.trackRecord.findMany({
      where: { user_id: userId },
      include: {
        coin: true,
      },
      orderBy: { datetime: "desc" },
    });

    const activity = logs.map((log) => ({
      action: log.action,
      amount: log.amount,
      coin: log.coin.name,
      datetime: log.datetime,
    }));

    return NextResponse.json({
      user,
      friends: friendList,
      activity,
    });
  } catch (err) {
    console.error("Profile fetch error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
