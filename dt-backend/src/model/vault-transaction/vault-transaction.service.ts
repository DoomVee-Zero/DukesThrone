import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma';
import { VaultTransaction } from '../types/vault-transaction.type';
import { Prisma } from '@prisma/client';

type GetVaultTransactions = Prisma.VaultTransactionGetPayload<{}>;

@Injectable()
export class VaultTransactionService {
  async getVaultTransactions(): Promise<GetVaultTransactions[]> {
    return prisma.vaultTransaction.findMany();
  }
}
