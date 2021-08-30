import { Field, ID, ObjectType, Float } from '@nestjs/graphql';
import { VaultTransaction } from './vault-transaction.type';
import { Prisma } from '@prisma/client';

@ObjectType()
export class Finance {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => Float)
  gold: number;

  @Field()
  vaultGold: number;

  @Field((_type) => [VaultTransaction], { nullable: true })
  transactions?: VaultTransaction[];
}
