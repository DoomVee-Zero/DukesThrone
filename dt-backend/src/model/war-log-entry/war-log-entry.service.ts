import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';
import { WarLogEntry } from '../types/war-log-entry.type';
import { Prisma } from '@prisma/client';

type GetWarLogEntries = Prisma.WarLogEntryGetPayload<{
  include: {
    attacker: true;
    defender: true;
  };
}>;

@Injectable()
export class WarLogEntryService {
  async getWarLogEntries(): Promise<WarLogEntry[]> {
    return prisma.warLogEntry.findMany({
      include: {
        attacker: true,
        defender: true,
      },
    });
  }
}
