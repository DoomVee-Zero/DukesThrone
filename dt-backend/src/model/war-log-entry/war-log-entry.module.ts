import { forwardRef, Module } from '@nestjs/common';
import { WarLogEntryService } from './war-log-entry.service';
import { EmpireModule } from '../empire/empire.module';

@Module({
  imports: [forwardRef(() => EmpireModule)],
  providers: [WarLogEntryService],
})
export class WarLogEntryModule {}
