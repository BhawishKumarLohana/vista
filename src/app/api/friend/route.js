import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import jwt from "jsonwebtoken";

const SECRET = "demo_secret_key";

export async function GET(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId } = jwt.verify(token, SECRET);

    const results = await prisma.$queryRawUnsafe(`
      SELECT 
        fr.sender_id,
        fr.receiver_id,
        s.user_id AS sender_user_id,
        s.displayName AS sender_displayName,
        s.email AS sender_email,
        r.user_id AS receiver_user_id,
        r.displayName AS receiver_displayName,
        r.email AS receiver_email
      FROM FriendRequest fr
      JOIN User s ON fr.sender_id = s.user_id
      JOIN User r ON fr.receiver_id = r.user_id
      WHERE fr.status = 'accepted' AND (fr.sender_id = ? OR fr.receiver_id = ?)
    `, userId, userId);

    const friendList = results.map((fr) => {
      const isSender = fr.sender_id === userId;
      return {
        user_id: isSender ? fr.receiver_user_id : fr.sender_user_id,
        displayName: isSender ? fr.receiver_displayName : fr.sender_displayName,
        email: isSender ? fr.receiver_email : fr.sender_email,
      };
    });

    return NextResponse.json(friendList);
  } catch (err) {
    console.error("Fetch friends error:", err);
    return NextResponse.json({ error: "Invalid token or internal error" }, { status: 500 });
  }
}
