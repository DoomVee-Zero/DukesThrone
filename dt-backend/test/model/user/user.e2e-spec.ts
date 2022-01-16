import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../../../src/model/user/user.module';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../src/app.module';
import { UserController } from '../../../src/model/user/user.controller';
import { UserService } from '../../../src/model/user/user.service';

describe('UserController e2e', () => {
  let app: INestApplication;
  let userModule: UserModule;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  //TODO: IT Block
  //it('/ (GET) ')
});
