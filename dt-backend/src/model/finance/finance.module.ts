import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceResolver } from './finance.resolver';

@Module({
  providers: [FinanceService, FinanceResolver]
})
export class FinanceModule {}
