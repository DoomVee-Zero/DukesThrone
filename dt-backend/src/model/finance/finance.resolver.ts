import { Resolver, Query } from '@nestjs/graphql';
import { Finance } from '../types/finance.type';
import { FinanceService } from './finance.service';
import { Prisma } from '@prisma/client';

type GetFinances = Prisma.FinanceGetPayload<{
  include: {
    transactions: true;
  };
}>;

@Resolver((_of) => Finance)
export class FinanceResolver {
  constructor(private readonly financeService: FinanceService) {}

  @Query((_returns) => [Finance])
  async finances(): Promise<GetFinances[]> {
    return await this.financeService.getFinances();
  }
}
