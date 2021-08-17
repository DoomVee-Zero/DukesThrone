import { Resolver, Query } from '@nestjs/graphql';
import { Finance } from '../types/finance.type';
import { FinanceService } from './finance.service';

@Resolver((of) => Finance)
export class FinanceResolver {
  constructor(private readonly financeService: FinanceService) {}

  @Query((returns) => [Finance])
  async finances() {
    return await this.financeService.getFinances();
  }
}
