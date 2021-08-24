import { Field, ID, ObjectType, Float } from '@nestjs/graphql';
import { Finance } from './finance.type';

@ObjectType()
export class VaultTransaction {
  @Field((_type) => ID)
  id: string;

  @Field()
  i18nKey: string;

  @Field((_type) => Float)
  amount: number;

  @Field((_type) => Finance, { nullable: true })
  finance?: Finance;
}
