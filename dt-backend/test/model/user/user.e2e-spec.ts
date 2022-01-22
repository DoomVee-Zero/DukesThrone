import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../../../src/model/user/user.module';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('UserController e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET ', () => {
    return request(app.getHttpServer()).get('/user').expect(200).expect('[]');
  });

  it('/user/signUp ', () => {
    return request(app.getHttpServer())
      .get('/user/signUp')
      .expect(200)
      .expect('');
  });

  it('/update', () => {
    return request(app.getHttpServer())
      .get('/user/update')
      .expect(200)
      .expect('');
  });

  it('delete', () => {
    return request(app.getHttpServer())
      .get('/user/delete')
      .expect(200)
      .expect('');
  });
});
