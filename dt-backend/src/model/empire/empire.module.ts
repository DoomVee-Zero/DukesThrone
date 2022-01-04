import { Module } from '@nestjs/common';
import { EmpireService } from './empire.service';
import { EmpireResolver } from './empire.resolver';
import { EmpireController } from './empire.controller';

@Module({

  providers: [EmpireService, EmpireResolver],
  controllers: [EmpireController]
})
export class EmpireModule {}
