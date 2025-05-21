import jwt from "jsonwebtoken";
import prisma from "@/lib/db";

const SECRET = "demo_secret_key"; 

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

  if (!selectedCoin || !action || !threshold) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const [coin] = await prisma.$queryRawUnsafe(
    `SELECT * FROM Coin WHERE name = ? LIMIT 1`,
    selectedCoin
  );

  const [user] = await prisma.$queryRawUnsafe(
    `SELECT * FROM User WHERE email = ? LIMIT 1`,
    decoded.email
  );

  if (!coin || !user) {
    return Response.json({ error: "Invalid user or coin" }, { status: 404 });
  }

  await prisma.$executeRawUnsafe(
    `INSERT INTO Alert (user_id, coin_id, floor_price, ceiling_price)
     VALUES (?, ?, ?, ?)`,
    user.user_id,
    coin.coin_id,
    action === "buy" ? parseFloat(threshold) : null,
    action === "sell" ? parseFloat(threshold) : null
  );

  return Response.json({ message: "Alert created successfully" }, { status: 201 });
}

export async function GET(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { email } = jwt.verify(token, SECRET);

    const [user] = await prisma.$queryRawUnsafe(
      `SELECT * FROM User WHERE email = ? LIMIT 1`,
      email
    );

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const rawAlerts = await prisma.$queryRawUnsafe(`
        SELECT a.alert_id, a.floor_price, a.ceiling_price,
              c.coin_id, c.name, c.symbol, c.slug
        FROM Alert a
        JOIN Coin c ON a.coin_id = c.coin_id
        WHERE a.user_id = ?
      `, user.user_id);

      // Now we do this to map things we get to the frontend so that we have a good working flow
      const alerts = rawAlerts.map(a => ({
        alert_id: a.alert_id,
        floor_price: a.floor_price,
        ceiling_price: a.ceiling_price,
        coin: {
          coin_id: a.coin_id,
          name: a.name,
          symbol: a.symbol,
          slug: a.slug,
        },
      }));


    return Response.json({ alerts }, { status: 200 });
  } catch (err) {
    console.error("Fetch alerts error:", err);
    return Response.json({ error: "Invalid token or server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { email } = jwt.verify(token, SECRET);
    const { alert_id } = await req.json();

    if (!alert_id) {
      return Response.json({ error: "Missing alert ID" }, { status: 400 });
    }

    const [user] = await prisma.$queryRawUnsafe(
      `SELECT * FROM User WHERE email = ? LIMIT 1`,
      email
    );

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.$executeRawUnsafe(
      `DELETE FROM Alert WHERE alert_id = ? AND user_id = ?`,
      alert_id,
      user.user_id
    );

    return Response.json({ message: "Alert deleted" }, { status: 200 });
  } catch (err) {
    console.error("Delete alert error:", err);
    return Response.json({ error: "Failed to delete alert" }, { status: 500 });
  }
}

