import { Module } from '@nestjs/common';
import { VaultTransactionService } from './vault-transaction.service';

@Module({
  providers: [VaultTransactionService],
})
export class VaultTransactionModule {}
