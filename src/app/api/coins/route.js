import { NextResponse } from "next/server";
import { ShowCoins } from "@/lib/db";

export async function GET() {
  const AllCoins = await ShowCoins()
  return NextResponse.json(AllCoins);
}
