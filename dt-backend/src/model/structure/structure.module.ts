import { Module } from '@nestjs/common';
import { StructureService } from './structure.service';
import { StructureResolver } from './structure.resolver';

@Module({
  providers: [StructureService, StructureResolver]
})
export class StructureModule {}
