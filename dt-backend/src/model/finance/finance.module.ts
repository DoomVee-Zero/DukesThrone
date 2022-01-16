import { forwardRef, Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { VaultTransactionModule } from '../vault-transaction/vault-transaction.module';

@Module({
  imports: [forwardRef(() => VaultTransactionModule)],
  providers: [FinanceService],
})
export class FinanceModule {}
