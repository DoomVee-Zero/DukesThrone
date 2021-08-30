import { Resolver, Query } from '@nestjs/graphql';
import { Empire } from '../types/empire.type';
import { EmpireService } from './empire.service';
import { Prisma } from '@prisma/client';

type GetEmpires = Prisma.EmpireGetPayload<{
  include: {
    finance: true;
    attacks: true;
    defenses: true;
    structures: true;
  };
}>;

@Resolver((_of) => Empire)
export class EmpireResolver {
  constructor(private readonly empireService: EmpireService) {}

  @Query((_returns) => [Empire])
  async empires(): Promise<GetEmpires[]> {
    return await this.empireService.getEmpires();
  }
}
