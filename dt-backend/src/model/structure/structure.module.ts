import { Module } from '@nestjs/common';
import { StructureService } from './structure.service';

@Module({
  providers: [StructureService],
})
export class StructureModule {}
