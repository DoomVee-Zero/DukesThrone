import { Resolver, Query } from '@nestjs/graphql';
import { Structure } from '../types/structure.type';
import { StructureService } from './structure.service';

@Resolver((_of) => Structure)
export class StructureResolver {
  constructor(private readonly structureService: StructureService) {}

  @Query((_returns) => [Structure])
  async structures(): Promise<Structure[]> {
    return await this.structureService.getStructures();
  }
}
