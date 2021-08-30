import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { WarLogEntry } from './war-log-entry.type';
import { Finance } from './finance.type';
import { Structure } from './structure.type';

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

  @Field((_type) => Finance, { nullable: true })
  finance?: Finance;

  @Field((_type) => [WarLogEntry], { nullable: true })
  attacks?: WarLogEntry[];

  @Field((_type) => [WarLogEntry], { nullable: true })
  defenses?: WarLogEntry[];

  @Field((_type) => [Structure], { nullable: true })
  structures?: Structure[];
}
