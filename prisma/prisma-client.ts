import { PrismaClient } from '@prisma/client';
import type { ITXClientDenyList } from '@prisma/client/runtime/library';

let prismaClient: PrismaClient;

export const getPrismaClient = (): PrismaClient => {
  if (!prismaClient) {
    prismaClient = new PrismaClient({
      log: ['warn', 'error'],
    });
  }
  return prismaClient;
};

export type IPrismaClient =
  | PrismaClient
  | Omit<PrismaClient, ITXClientDenyList>;

// Graceful shutdown
process.on('beforeExit', async () => {
  if (prismaClient) await prismaClient.$disconnect();
});
