import { Prisma } from '@prisma/client';

export class AuditLogCreateDto {
  id?: string;
  time: Date | string;
  ip: string;
  client: string;
  i18nKey: string;
  user: Prisma.UserCreateNestedOneWithoutAuditInput;
}
