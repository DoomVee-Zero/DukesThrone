import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';

@Injectable()
export class EmpireService {
  async getEmpires() {
    return prisma.empire.findMany();
  }
}
