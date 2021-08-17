import { Module } from '@nestjs/common';
import { WarLogEntryResolver } from './war-log-entry.resolver';
import { WarLogEntryService } from './war-log-entry.service';

@Module({
  providers: [WarLogEntryResolver, WarLogEntryService],
})
export class WarLogEntryModule {}
