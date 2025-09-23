import { PrismaClient } from '@prisma/client';
import type { ITXClientDenyList } from '@prisma/client/runtime/library';
export declare const getPrismaClient: () => PrismaClient;
export type IPrismaClient = PrismaClient | Omit<PrismaClient, ITXClientDenyList>;
//# sourceMappingURL=prisma-client.d.ts.map