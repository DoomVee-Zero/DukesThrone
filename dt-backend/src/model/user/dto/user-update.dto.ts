import {Empire} from "../../types/empire.type";
import {AuditLog} from "@prisma/client";

export class UserUpdateDto {
    id: number;
    username: string;
    password: string;
    mail: string;
    audit: AuditLog[];
    empire: Empire;

}
