import { PrismaClient } from "@prisma/client";
import CoinDetails from "@/components/BasicDataCoin"
const prisma = new PrismaClient();

export default async function CoinDetailPage({ params }) {
  const { id } = params;
  console.log(params);

  const selectedCoin = await prisma.coin.findUnique({
    where: { coin_id:Number(id) },
  });

  if (!selectedCoin) return <div>Coin not found</div>;

  return( <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            {selectedCoin.name}
          </h1>
          <p className="text-gray-400 text-lg">#{selectedCoin.symbol.toUpperCase()}</p>
        </div>

        <CoinDetails selectedCoin={selectedCoin} />
      </div>
    </div>);
}
