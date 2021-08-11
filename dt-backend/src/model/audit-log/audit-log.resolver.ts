import { Resolver, Query } from '@nestjs/graphql';
import { AuditLog } from '../types/audit-log.type';
import { AuditLogService } from './audit-log.service';

@Resolver((of) => AuditLog)
export class AuditLogResolver {
  constructor(private readonly auditlogService: AuditLogService) {}

  @Query(returns => [AuditLog])
  async auditlogs() {
    return await this.auditlogService.getAuditLogs();
  }
}
