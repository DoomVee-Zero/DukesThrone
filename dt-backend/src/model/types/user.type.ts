import { AuditLog } from './audit-log.type';
import { Empire } from './empire.type';

export class User {
  id: string;

  username: string;

  password: string;

  mail: string;

  audit?: AuditLog[];

  empire?: Empire;
}
