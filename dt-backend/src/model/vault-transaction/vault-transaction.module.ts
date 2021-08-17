import { Module } from '@nestjs/common';
import { VaultTransactionService } from './vault-transaction.service';
import { VaultTransactionResolver } from './vault-transaction.resolver';

@Module({
  providers: [VaultTransactionService, VaultTransactionResolver],
})
export class VaultTransactionModule {}
