import jwt from "jsonwebtoken";
import prisma from "@/lib/db";

const SECRET = "demo_secret_key"; // match the one in /api/auth

export async function POST(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, SECRET); // no env used
  } catch {
    return Response.json({ error: "Invalid token" }, { status: 403 });
  }

  const { selectedCoin, action, threshold } = await req.json();

  const coin = await prisma.coin.findFirst({ where: { name: selectedCoin } });
  const user = await prisma.user.findUnique({ where: { email: decoded.email } });

  if (!coin || !user) {
    return Response.json({ error: "Invalid user or coin" }, { status: 404 });
  }

  const alert = await prisma.alert.create({
    data: {
      user_id: user.user_id,
      coin_id: coin.coin_id,
      floor_price: action === "buy" ? parseFloat(threshold) : null,
      ceiling_price: action === "sell" ? parseFloat(threshold) : null,
    },
  });

  return Response.json(alert, { status: 201 });
}
