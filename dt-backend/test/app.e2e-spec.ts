import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { EmpireModule } from '../src/model/empire/empire.module';
import { FinanceModule } from '../src/model/finance/finance.module';
import { UserModule } from '../src/model/user/user.module';
import { WarLogEntryModule } from '../src/model/war-log-entry/war-log-entry.module';
import { VaultTransactionModule } from '../src/model/vault-transaction/vault-transaction.module';
import { StructureModule } from '../src/model/structure/structure.module';
import { AuditLogModule } from '../src/model/audit-log/audit-log.module';
import { LoggerModule } from '../src/services/logger/logger.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        UserModule,
        AuditLogModule,
        EmpireModule,
        LoggerModule,
        StructureModule,
        FinanceModule,
        VaultTransactionModule,
        WarLogEntryModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
