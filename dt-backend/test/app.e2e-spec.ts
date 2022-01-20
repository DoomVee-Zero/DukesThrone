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
import { AppService } from '../src/app.service';
import { AuditLogService } from '../src/model/audit-log/audit-log.service';
import { EmpireService } from '../src/model/empire/empire.service';
import { FinanceService } from '../src/model/finance/finance.service';
import { StructureService } from '../src/model/structure/structure.service';
import { UserService } from '../src/model/user/user.service';
import { VaultTransactionService } from '../src/model/vault-transaction/vault-transaction.service';
import { WarLogEntryService } from '../src/model/war-log-entry/war-log-entry.service';
import { LoggerService } from '../src/services/logger/logger.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let appService: { findAll: () => ['test'] };
  let auditLogService: { findAll: () => ['test'] };
  let empireService: { findAll: () => ['test'] };
  let financeService: { findAll: () => ['test'] };
  let structureService: { findAll: () => ['test'] };
  let userService: { findAll: () => ['test'] };
  let vaultTransactionService: { findAll: () => ['test'] };
  let warLogEntryService: { findAll: () => ['test'] };
  let loggerService: LoggerService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        UserModule,
        AuditLogModule,
        EmpireModule,
        LoggerModule,
        StructureModule,
        FinanceModule,
        VaultTransactionModule,
        WarLogEntryModule,
      ],
    })
      .overrideProvider(AppService)
      .useValue(app)
      .overrideProvider(UserService)
      .useValue(userService)
      .overrideProvider(AuditLogService)
      .useValue(auditLogService)
      .overrideProvider(EmpireService)
      .useValue(empireService)
      .setLogger(loggerService)
      .overrideProvider(StructureService)
      .useValue(structureService)
      .overrideProvider(FinanceService)
      .useValue(financeService)
      .overrideProvider(VaultTransactionService)
      .useValue(vaultTransactionService)
      .overrideProvider(WarLogEntryService)
      .useValue(warLogEntryService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        data: [
          appService.findAll(),
          auditLogService.findAll(),
          empireService.findAll(),
          financeService.findAll(),
          vaultTransactionService.findAll(),
          warLogEntryService.findAll(),
        ],
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
