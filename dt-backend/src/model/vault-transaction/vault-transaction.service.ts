import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';

@Injectable()
export class VaultTransactionService {
  async getVaultTransactions() {
    return prisma.user.findMany();
  }
}
