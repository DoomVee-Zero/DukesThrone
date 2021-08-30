import { Resolver, Query } from '@nestjs/graphql';
import { VaultTransaction } from '../types/vault-transaction.type';
import { VaultTransactionService } from './vault-transaction.service';
import { Prisma } from '@prisma/client';

type GetVaultTransactions = Prisma.VaultTransactionGetPayload <{}>

@Resolver((_of) => VaultTransaction)
export class VaultTransactionResolver {
  constructor(private readonly vaultTransaction: VaultTransactionService) {}

  @Query((_returns) => [VaultTransaction])
  async vaultTransactions(): Promise<GetVaultTransactions[]> {
    return await this.vaultTransaction.getVaultTransactions();
  }
}
