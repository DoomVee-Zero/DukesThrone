import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma';
import { Structure } from '../types/structure.type';

@Injectable()
export class StructureService {
  async getStructures(): Promise<Structure[]> {
    return prisma.structure.findMany();
  }
}
