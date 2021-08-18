import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Structure {
  @Field((_type) => ID)
  id: string;

  @Field()
  empireId: string;

  @Field()
  i18nKey: string;

  @Field()
  category: string;

  /*TODO: fix: complex types
  @Field()
  empire: Empire;

  @Field()
  attributes: Json;
  */
}
