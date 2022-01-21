import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma';
import { Empire } from '../types/empire.type';
import { Prisma } from '@prisma/client';

type GetEmpires = Prisma.EmpireGetPayload<{
  include: {
    finance: true;
    attacks: true;
    defenses: true;
    structures: true;
  };
}>;

@Injectable()
export class EmpireService {
  async getEmpires(): Promise<GetEmpires[]> {
    return prisma.empire.findMany({
      include: {
        finance: true,
        attacks: true,
        defenses: true,
        structures: true,
      },
    });
  }
}
