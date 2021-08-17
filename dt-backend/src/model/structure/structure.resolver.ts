import { Resolver, Query } from '@nestjs/graphql';
import { Structure } from '../types/structure.type';
import { StructureService } from './structure.service'

@Resolver((of) => Structure)
export class StructureResolver {
  constructor(private readonly structureService: StructureService) {}

  @Query((returns) => [Structure])
  async structures() {
    return await this.structureService.getStructures();
  }
}
