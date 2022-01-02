import { Module } from '@nestjs/common';
import { AuditLogService } from './audit-log.service';
import { AuditLogResolver } from './audit-log.resolver';
import { AuditLogController } from "./audit-log.controller";

@Module({
  providers: [AuditLogService, AuditLogResolver],
  controllers: [AuditLogController],
})
export class AuditLogModule {}
