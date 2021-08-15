import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Empire {
  @Field((type) => ID)
  id: string;

  @Field()
  userId: string;

  @Field((type) => Int)
  bannerId: number;

  @Field()
  description?: string;

  @Field((type) => Int)
  level: number;

  @Field((type) => Int)
  experience: number;

  @Field((type) => Int)
  attributes: any;

  @Field((type) => Int)
  turnsAvailable: number;

  @Field()
  race: string;

  @Field()
  class: string;

//  TODO: Complex Fields
//  @Field()
//  armory: any;

//  @Field()
//  population: any;

//  @Field()
//  attributes: any;

//  @Field()
//  finance: Finance?;

//  @Field()
//  attacks: WarLogEntry[];

//  @Field()
//  defenses: WarLogEntry[];

//  @Field()
//  structures: Structure[];
}
