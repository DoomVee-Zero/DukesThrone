import { Resolver, Query } from '@nestjs/graphql';
import { Finance } from '../types/finance.type';
import { FinanceService } from './finance.service';

@Resolver((_of) => Finance)
export class FinanceResolver {
  constructor(private readonly financeService: FinanceService) {}

  @Query((_returns) => [Finance])
  async finances(): Promise<Finance[]> {
    return await this.financeService.getFinances();
  }
}
