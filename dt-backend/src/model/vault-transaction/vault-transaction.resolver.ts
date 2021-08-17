import { Resolver, Query } from '@nestjs/graphql';
import { VaultTransaction } from '../types/vault-transaction.type';
import { VaultTransactionService } from './vault-transaction.service';

@Resolver(of => VaultTransaction)
export class VaultTransactionResolver {
  constructor(private readonly vaultTransaction: VaultTransactionService) {}

  @Query(returns => [VaultTransaction])
  async vaultTransactions(){
    return await this.vaultTransaction.getVaultTransactions();  
  }
}
