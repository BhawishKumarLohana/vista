import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user_id } = await req.json();

  if (!user_id) {
    return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
  }

  const requests = await prisma.friendRequest.findMany({
    where: {
      receiver_id: user_id,
      status: "pending",
    },
    include: {
      sender: true,
    },
  });

  return NextResponse.json(requests);
}
