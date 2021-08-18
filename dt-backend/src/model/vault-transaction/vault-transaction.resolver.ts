import { Resolver, Query } from '@nestjs/graphql';
import { VaultTransaction } from '../types/vault-transaction.type';
import { VaultTransactionService } from './vault-transaction.service';

@Resolver((_of) => VaultTransaction)
export class VaultTransactionResolver {
  constructor(private readonly vaultTransaction: VaultTransactionService) {}

  @Query((_returns) => [VaultTransaction])
  async vaultTransactions(): Promise<VaultTransaction[]> {
    return await this.vaultTransaction.getVaultTransactions();
  }
}
