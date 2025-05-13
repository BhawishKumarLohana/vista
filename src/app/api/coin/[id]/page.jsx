import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function CoinPage({ params }) {
  const { id } = params;

  const coin = await prisma.coin.findUnique({
    where: { id: Number(id) },
  });

  if (!coin) {
    return <div className="text-red-500 p-8">Coin not found</div>;
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">{coin.name}</h1>
      <p><strong>Symbol:</strong> {coin.symbol}</p>
      <p><strong>Price:</strong> ${coin.price}</p>
      <p><strong>24h Change:</strong> {coin.change_24h}%</p>
    </div>
  );
}
