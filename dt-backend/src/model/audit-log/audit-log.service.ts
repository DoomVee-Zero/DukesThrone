import { Injectable } from '@nestjs/common';
import { AuditLog } from '@prisma/client';
import { prisma } from '../../prisma';

@Injectable()
export class AuditLogService {
  async getAuditLogs(): Promise<AuditLog[]> {
    return prisma.auditLog.findMany();
  }
}
