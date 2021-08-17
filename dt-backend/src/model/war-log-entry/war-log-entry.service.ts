import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';

@Injectable()
export class WarLogEntryService {
  async getWarLogEntries() {
    return prisma.warLogEntry.findMany();
  }
}
