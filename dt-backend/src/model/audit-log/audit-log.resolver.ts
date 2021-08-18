import { Resolver, Query } from '@nestjs/graphql';
import { AuditLog } from '../types/audit-log.type';
import { AuditLogService } from './audit-log.service';

@Resolver((_of) => AuditLog)
export class AuditLogResolver {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Query((_returns) => [AuditLog])
  async auditlogs(): Promise<AuditLog[]> {
    return await this.auditLogService.getAuditLogs();
  }
}
