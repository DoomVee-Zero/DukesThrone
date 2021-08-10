import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';

@Injectable()
export class AuditLogService {
  async getAuditLogs() {
    return prisma.auditLog.findMany();
  }
}
