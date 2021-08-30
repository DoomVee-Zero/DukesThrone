import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Structure {
  @Field((_type) => ID)
  id: string;

  @Field()
  i18nKey: string;

  @Field()
  category: string;
}
