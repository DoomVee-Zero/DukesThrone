import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class WarLogEntry {
  @Field((_type) => ID)
  id: string;

  @Field()
  battleType: string;

  @Field()
  attackerID: string;

  @Field()
  defenderID: string;

  @Field((_type) => Int)
  turns: number;

  /*TODO: resolve complex types

  @Field()
  details: Json;

  @Field()
  attacker:   Empire; 

  @Field() 
  defender:   Empire;
  */
}
