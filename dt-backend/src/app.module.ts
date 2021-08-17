import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './model/user/user.module';
import { AuditLogModule } from './model/audit-log/audit-log.module';
import { EmpireModule } from './model/empire/empire.module';

import { LoggerModule } from './services/logger/logger.module';
import { StructureModule } from './model/structure/structure.module';
import { FinanceModule } from './model/finance/finance.module';
import { VaultTransactionModule } from './model/vault-transaction/vault-transaction.module';
import { WarLogEntryModule } from './model/war-log-entry/war-log-entry.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: `${process.cwd() + '/src/schema.gql'}`,
    }),
    AuditLogModule,

    EmpireModule,

    LoggerModule,

    StructureModule,

    FinanceModule,

    VaultTransactionModule,

    WarLogEntryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
