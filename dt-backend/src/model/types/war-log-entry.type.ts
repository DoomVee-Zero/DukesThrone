import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class WarLogEntry {
  @Field(type => ID)
  id: string;

  @Field()
  battleType: string;
  
  @Field()
  attackerID: string;

  @Field()
  defenderID: string;

  @Field(type => Int)
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
