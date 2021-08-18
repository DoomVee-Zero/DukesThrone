import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Empire {
  @Field((_type) => ID)
  id: string;

  @Field()
  userId: string;

  @Field((_type) => Int)
  bannerId: number;

  @Field()
  description?: string;

  @Field((_type) => Int)
  level: number;

  @Field((_type) => Int)
  experience: number;

  @Field((_type) => Int)
  attributes: any;

  @Field((_type) => Int)
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
