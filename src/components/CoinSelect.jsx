import { ShowCoins } from "@/lib/db";

async function  CoinSelect() {
    const AllCoins = await ShowCoins()
  return (
    
    <div>
        {AllCoins.map(eachCoin => <div key={eachCoin.coin_id}>
            <h3>{eachCoin.name}</h3>
            <h3>{eachCoin.price}</h3>
            
            
            </div>)}
    </div>

  )
}

export default CoinSelect