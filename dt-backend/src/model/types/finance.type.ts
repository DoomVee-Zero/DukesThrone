import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Finance {
  @Field((_type) => ID)
  id: string;

  @Field()
  gold: number;

  @Field()
  vaultGold: number;

  @Field()
  empireId: string;

  /*TODO: resolve complex modules
  @Field()
  empire: Empire;

  @Field()
  transactions: VaultTransaction[];
  */
}
