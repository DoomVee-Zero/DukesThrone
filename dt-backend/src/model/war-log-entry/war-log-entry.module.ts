import { Module } from '@nestjs/common';
import { WarLogEntryService } from './war-log-entry.service';

@Module({
  providers: [WarLogEntryService],
})
export class WarLogEntryModule {}
