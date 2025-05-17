import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

export async function GET(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { userId } = jwt.verify(token, SECRET);

    const friends = await prisma.friendRequest.findMany({
      where: {
        status: "accepted",
        OR: [
          { sender_id: userId },
          { receiver_id: userId }
        ]
      },
      include: {
        sender: true,
        receiver: true
      }
    });

    const friendList = friends.map(req => {
      const friend = req.sender_id === userId ? req.receiver : req.sender;
      return {
        user_id: friend.user_id,
        displayName: friend.displayName,
        email: friend.email
      };
    });

    return NextResponse.json(friendList);
  } catch (err) {
    console.error("Fetch friends error:", err);
    return NextResponse.json({ error: "Invalid token or internal error" }, { status: 500 });
  }
}
