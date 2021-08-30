import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class WarLogEntry {
  @Field((_type) => ID)
  id: string;

  @Field()
  battleType: string;

  @Field((_type) => Int)
  turns: number;
}
