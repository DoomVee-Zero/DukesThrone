import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';
import { VaultTransaction } from "../types/vault-transaction.type";

@Injectable()
export class VaultTransactionService {
  async getVaultTransactions(): Promise<VaultTransaction[]> {
    return prisma.vaultTransaction.findMany({
      include: {
        finance: true,
      },
    });
  }
}
