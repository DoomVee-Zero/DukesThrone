import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';

@Injectable()
export class FinanceService {
  async getFinances() {
    return prisma.user.findMany();
  }  
}
