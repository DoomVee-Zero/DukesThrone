export class AuditLogCreateDto {
  time: Date | string;
  ip: string;
  client: string;
  i18nKey: string;
}
