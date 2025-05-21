import { PrismaClient } from "@prisma/client";
import CoinDetails from "@/components/BasicDataCoin"
import Link from "next/link";
const prisma = new PrismaClient();

export default async function CoinDetailPage({ params }) {
  const { id } = params;
  console.log(params);

  const selectedCoin = await prisma.coin.findUnique({
    where: { coin_id:Number(id) },
  });

  if (!selectedCoin) return <div>Coin not found</div>;

  return( 
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-6">
          <Link
            href="/coins"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-150 mt-20 py-20"
          >
            ← Back to Coins
          </Link>
        </div>

        <div className="mb-10 border-b border-gray-700 pb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
            {selectedCoin.name}
          </h1>
          <p className="text-gray-400 text-lg tracking-wider uppercase">
            #{selectedCoin.symbol}
          </p>
        </div>

        <CoinDetails selectedCoin={selectedCoin} />
      </div>
    </div>
    );
}
