import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user_id } = await req.json();

  if (!user_id) {
    return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
  }

  const requests = await prisma.$queryRawUnsafe(
    `SELECT fr.*, u.user_id AS sender_id, u.displayName 
     FROM FriendRequest fr
     JOIN User u ON fr.sender_id = u.user_id
     WHERE fr.receiver_id = ? AND fr.status = 'pending'`,
    user_id
  );

  return NextResponse.json(requests);
}
