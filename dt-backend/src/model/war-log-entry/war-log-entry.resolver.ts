import { Resolver, Query } from '@nestjs/graphql';
import { WarLogEntry } from '../types/war-log-entry.type';
import { WarLogEntryService } from './war-log-entry.service';

@Resolver(of => WarLogEntry)
export class WarLogEntryResolver {
  constructor(private readonly warLogEntryService: WarLogEntryService) {}
   
  @Query(returns => [WarLogEntry])	  
  async warLogEntries() {
    return await this.warLogEntryService.getWarLogEntries;
  }  
}
