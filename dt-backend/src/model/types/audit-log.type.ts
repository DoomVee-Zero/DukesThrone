import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuditLog {
  @Field((_type) => ID)
  id: string;

  @Field()
  userId: string;

  @Field()
  time: Date;

  @Field()
  ip: string;

  @Field()
  client: string;

  @Field()
  i18nKey: string;
}
