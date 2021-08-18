import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';
import { Empire } from "../types/empire.type";

@Injectable()
export class EmpireService {
  async getEmpires(): Promise<Empire[]> {
    return prisma.empire.findMany();
  }
}
