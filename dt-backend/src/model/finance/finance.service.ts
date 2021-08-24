import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';
import { Finance } from "../types/finance.type";

@Injectable()
export class FinanceService {
  async getFinances(): Promise<Finance[]> {
    return prisma.finance.findMany({
      include: {
        empire: true,
        transactions: true,
      },
    });
  }
}
