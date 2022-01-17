import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EmpireModule } from '../empire/empire.module';
import { AuditLogModule } from '../audit-log/audit-log.module';

@Module({
  imports: [forwardRef(() => EmpireModule)],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
