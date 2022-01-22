import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../../../src/model/user/user.module';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { ModuleMocker } from 'jest-mock';

describe('UserController e2e', () => {
  const moduleMocker = new ModuleMocker(global);
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
    const user = {
      username: 'john',
      password: 'john',
      mail: 'john@john.com',
    };
    return request(app.getHttpServer())
      .post('/user/signUp')
      .send(user);
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
