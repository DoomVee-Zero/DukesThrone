import { Resolver, Query } from '@nestjs/graphql';
import { Empire } from '../types/empire.type';
import { EmpireService } from './empire.service';

@Resolver((_of) => Empire)
export class EmpireResolver {
  constructor(private readonly empireService: EmpireService) {}

  @Query((_returns) => [Empire])
  async empires(): Promise<Empire[]> {
    return await this.empireService.getEmpires();
  }
}
