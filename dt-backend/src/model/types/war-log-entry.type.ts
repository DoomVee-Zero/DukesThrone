import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Empire } from './empire.type';

@ObjectType()
export class WarLogEntry {
  @Field((_type) => ID)
  id: string;

  @Field()
  battleType: string;

  @Field((_type) => Int)
  turns: number;

  @Field((_type) => Empire, { nullable: true })
  attacker?: Empire;

  @Field((_type) => Empire, { nullable: true })
  defender?: Empire;
}
