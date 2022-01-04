import {AuditLog} from "../../types/audit-log.type";
import {Empire} from "../../types/empire.type";

export class CreateUserDto {
    id?: string;
    username: string;
    password: string;
    mail: string;
    audit: AuditLog[];
    empire?: Empire;
}