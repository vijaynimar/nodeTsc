import Prisma from '@prisma/client';

export const prisma = new Prisma.PrismaClient();

export const getPrismaClient = (): Prisma.PrismaClient => {
  return prisma;
};
export default prisma;