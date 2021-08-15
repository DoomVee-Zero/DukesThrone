import { Resolver, Query } from '@nestjs/graphql';
import { Empire } from '../types/empire.type';
import { EmpireService } from './empire.service';

@Resolver((of) => Empire)
export class EmpireResolver {
  constructor(private readonly empireService: EmpireService) {}

  @Query((returns) => [Empire])
  async empires() {
    return await this.empireService.getEmpires();
  }
}
