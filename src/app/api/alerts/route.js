import jwt from "jsonwebtoken";
import prisma from "@/lib/db";

const SECRET = "demo_secret_key"; // Use env in production

export async function POST(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, SECRET);
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

export async function GET(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { email } = jwt.verify(token, SECRET);

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const alerts = await prisma.alert.findMany({
      where: { user_id: user.user_id },
      include: {
        coin: true, // Include coin name, etc.
      },
    });

    return Response.json({ alerts }, { status: 200 });
  } catch (error) {
    console.error("Fetch alerts error:", error);
    return Response.json({ error: "Invalid token or server error" }, { status: 500 });
  }
}

