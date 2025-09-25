import { PrismaClient } from '@prisma/client';
let prismaClient;
export const getPrismaClient = () => {
    if (!prismaClient) {
        prismaClient = new PrismaClient({
            log: ['warn', 'error'],
        });
    }
    return prismaClient;
};
//# sourceMappingURL=prisma-client.js.map