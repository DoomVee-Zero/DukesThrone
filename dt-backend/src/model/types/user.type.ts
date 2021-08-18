import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AuditLog } from "./audit-log.type";
import { Empire } from "./empire.type";

@ObjectType()
export class User {
  @Field((_type) => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  mail: string;

  @Field((_type) => [AuditLog])
  audit: AuditLog[];

  @Field((_type) => Empire, { nullable: true })
  empire: Empire | null;
}
