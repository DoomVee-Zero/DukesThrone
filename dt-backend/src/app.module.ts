import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './model/user/user.module';
import { AuditLogModule } from './model/audit-log/audit-log.module';
import { EmpireModule } from './model/empire/empire.module';

import { LoggerModule } from './services/logger/logger.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: `${process.cwd() + '/src/schema.gql'}`,
    }),
    AuditLogModule,

    EmpireModule,

    LoggerModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
