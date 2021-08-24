import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Empire } from './empire.type';

@ObjectType()
export class Structure {
  @Field((_type) => ID)
  id: string;

  @Field()
  i18nKey: string;

  @Field()
  category: string;

  @Field((_type) => Empire, { nullable: true })
  empire?: Empire;
}
