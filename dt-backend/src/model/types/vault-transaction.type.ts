import { Field, ID, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class VaultTransaction {
  @Field((_type) => ID)
  id: string;

  @Field()
  financeId: string;

  @Field()
  i18nKey: string;

  @Field((_type) => Float)
  amount: number;

  /*TODO: resolve complex types
  @Field()
  finance: Finance;
  */
}
