import Prisma from '@prisma/client';
export const prisma = new Prisma.PrismaClient();
export const getPrismaClient = () => {
    return prisma;
};
export default prisma;
//# sourceMappingURL=prisma-client.js.map