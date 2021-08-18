import { Resolver, Query } from '@nestjs/graphql';
import { WarLogEntry } from '../types/war-log-entry.type';
import { WarLogEntryService } from './war-log-entry.service';

@Resolver((_of) => WarLogEntry)
export class WarLogEntryResolver {
  constructor(private readonly warLogEntryService: WarLogEntryService) {}

  @Query((_returns) => [WarLogEntry])
  async warLogEntries(): Promise<WarLogEntry[]> {
    return await this.warLogEntryService.getWarLogEntries();
  }
}
