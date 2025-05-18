import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req, { params }) {
  const userId = parseInt(params.id);

  if (!userId || isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
    // Fetch basic user info
    const [user] = await prisma.$queryRawUnsafe(
      `SELECT user_id, email, displayName, user_info FROM User WHERE user_id = ? LIMIT 1`,
      userId
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Fetch accepted friend requests (both directions)
    const friendsRaw = await prisma.$queryRawUnsafe(`
      SELECT fr.sender_id, fr.receiver_id,
             s.user_id AS sender_user_id, s.displayName AS sender_displayName, s.email AS sender_email,
             r.user_id AS receiver_user_id, r.displayName AS receiver_displayName, r.email AS receiver_email
      FROM FriendRequest fr
      JOIN User s ON fr.sender_id = s.user_id
      JOIN User r ON fr.receiver_id = r.user_id
      WHERE fr.status = 'accepted' AND (fr.sender_id = ? OR fr.receiver_id = ?)
    `, userId, userId);

    const friendList = friendsRaw.map((fr) => {
      const isSender = fr.sender_id === userId;
      return {
        user_id: isSender ? fr.receiver_user_id : fr.sender_user_id,
        displayName: isSender ? fr.receiver_displayName : fr.sender_displayName,
        email: isSender ? fr.receiver_email : fr.sender_email,
      };
    });

    // Fetch activity logs
    const activityRaw = await prisma.$queryRawUnsafe(`
      SELECT tr.action, tr.amount, tr.datetime, c.name AS coin
      FROM TrackRecord tr
      JOIN Coin c ON tr.coin_id = c.coin_id
      WHERE tr.user_id = ?
      ORDER BY tr.datetime DESC
    `, userId);

    const activity = activityRaw.map((log) => ({
      action: log.action,
      amount: log.amount,
      coin: log.coin,
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
