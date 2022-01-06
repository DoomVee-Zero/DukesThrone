import { Module } from '@nestjs/common';
import { EmpireService } from './empire.service';

@Module({
  providers: [EmpireService],
})
export class EmpireModule {}
