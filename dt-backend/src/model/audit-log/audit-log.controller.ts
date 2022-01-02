import {Controller, Get, Req} from "@nestjs/common";
import { AuditLogService } from "./audit-log.service";
import { Request} from "express";

@Controller("audit-log")
export class AuditLogController {

    constructor(private readonly auditLogService: AuditLogService) {}

    @Get()
    getAudit(): string {
        return "hello cats";
    }
}