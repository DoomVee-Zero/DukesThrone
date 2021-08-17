import { Field, ID, ObjectType, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class Finance {
  @Field((type) => ID)
  id: string;

  @Field((type) => Float)
  gold: number;

  @Field((type) => Float)
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
