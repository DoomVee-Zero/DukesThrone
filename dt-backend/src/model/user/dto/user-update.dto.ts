import {AuditLog} from "@prisma/client";
import {Empire} from "../../types/empire.type";

export class UserUpdateDto {
  id?: string;
  username?: string;
  password?: string;
  mail?: string;
  audit?: AuditLog;
  empire?: Empire;

}
