import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';
import { Finance } from "../types/finance.type";
import { Prisma } from '@prisma/client';

type GetFinances = Prisma.FinanceGetPayload<{
  include: { transactions: true }
}>

@Injectable()
export class FinanceService {
  async getFinances(): Promise<GetFinances[]> {
    return prisma.finance.findMany({
      include: {
        transactions: true,
      },
    });
  }
}

