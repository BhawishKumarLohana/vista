import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function ShowCoins (){
  await new Promise((resolve)=>setTimeout(resolve,5000))
  return prisma.coin.findMany();
}

export default prisma;
