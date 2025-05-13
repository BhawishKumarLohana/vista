import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function CoinPage({ params }) {
  const coinId = parseInt(params.id);
  const coin = await prisma.coin.findUnique({
    where: { id: coinId },
  });

  if (!coin) {
    return <div className="text-red-500 p-10">Coin not found</div>;
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">
        {coin.name} ({coin.symbol})
      </h1>
      <p className="text-xl">Current Price: ${coin.price}</p>
      <p className="text-xl">
        24h Change:{" "}
        <span className={coin.change_24h >= 0 ? "text-emerald-400" : "text-red-400"}>
          {coin.change_24h}%
        </span>
      </p>
    </div>
  );
}
