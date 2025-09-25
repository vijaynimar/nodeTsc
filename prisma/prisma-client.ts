import { PrismaClient } from '@prisma/client';


let prismaClient: PrismaClient;

export const getPrismaClient = (): PrismaClient => {
  if (!prismaClient) {
    prismaClient = new PrismaClient({
      log: ['warn', 'error'],
    });
  }

  return prismaClient;
};

// Optional type alias if you want, but no ITXClientDenyList
export type IPrismaClient = PrismaClient;