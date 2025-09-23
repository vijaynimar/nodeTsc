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
// Graceful shutdown
process.on('beforeExit', async () => {
    if (prismaClient)
        await prismaClient.$disconnect();
});
//# sourceMappingURL=prisma-client.js.map