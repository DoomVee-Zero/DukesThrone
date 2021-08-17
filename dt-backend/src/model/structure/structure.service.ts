import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';

@Injectable()
export class StructureService {
  async getStructures() {
    return prisma.structure.findMany();  
  }
}
