import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.type';

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

  @Field((_type) => User, { nullable: true })
  user?: User;
}
