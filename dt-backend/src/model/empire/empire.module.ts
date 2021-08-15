import { Module } from '@nestjs/common';
import { EmpireService } from './empire.service';
import { EmpireResolver } from './empire.resolver';

@Module({
  providers: [EmpireService, EmpireResolver],
})
export class EmpireModule {}
