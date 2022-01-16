import { forwardRef, Module } from '@nestjs/common';
import { EmpireService } from './empire.service';
import { FinanceModule } from '../finance/finance.module';
import { WarLogEntryModule } from '../war-log-entry/war-log-entry.module';
import { StructureModule } from '../structure/structure.module';

@Module({
  imports: [
    forwardRef(() => FinanceModule),
    forwardRef(() => WarLogEntryModule),
    forwardRef(() => StructureModule),
  ],
  providers: [EmpireService],
})
export class EmpireModule {}
