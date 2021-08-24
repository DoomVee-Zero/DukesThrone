import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Empire } from './empire.type';
import { VaultTransaction } from './vault-transaction.type';

@ObjectType()
export class Finance {
  @Field((_type) => ID)
  id: string;

  @Field()
  gold: number;

  @Field()
  vaultGold: number;

  @Field((_type) => Empire, { nullable: true })
  empire?: Empire;

  @Field((_type) => [VaultTransaction], { nullable: true })
  transactions?: VaultTransaction[];
}
