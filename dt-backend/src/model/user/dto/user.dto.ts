import {AuditLog} from "@prisma/client";
import {Empire} from "../../types/empire.type";

export class UserDto {
    username: string;
    mail: string;
    password: string;
    audit: AuditLog[];
    empire?: Empire;
}
