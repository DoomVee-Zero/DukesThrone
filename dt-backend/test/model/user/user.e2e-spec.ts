import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../../../src/model/user/user.module';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import * as assert from 'assert';

describe('UserController e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/update/:id', async () => {
    // create user
    const user = {
      username: 'john',
      password: 'john',
      mail: 'john@john.com',
    };
    //send create request for john
    const res = await request(app.getHttpServer())
      .post('/user/signUp')
      .send(user);

    //update user john to joe
    const updateUser = {
      username: 'joe',
      password: 'joe',
      mail: 'joe@joe.com',
    };
    const update = await request(app.getHttpServer())
      .patch('/user/update/' + res.body.id)
      .send(updateUser);

    assert((update.body.id == res.body.id));

    //delete user
    await request(app.getHttpServer())
      .delete('/user/delete/' + res.body.id)
      .send(res.body.id);
  });

  test('delete/:id', async () => {
    const user = {
      username: 'john',
      password: 'john',
      mail: 'john@john.com',
    };
    const res = await request(app.getHttpServer())
      .post('/user/signUp')
      .send(user)
      .expect(201);
    return request(app.getHttpServer())
      .delete('/user/delete/' + res.body.id)
      .expect(200);
  });

  test('/user/:id/audit', async () => {
    //create user to add audit to
    const user = {
      username: 'john',
      password: 'john',
      mail: 'john@john.com',
    };
    const res = await request(app.getHttpServer())
      .post('/user/signUp')
      .send(user)
      .expect(201);

    const userId = res.body.id;

    //create and add audit entry
    const auditEntry = {
      userId: userId,
      ip: "127.0.0.1",
      time: new Date(),
      client: "some random os",
      i18nKey: "i18nkey",
    }
    console.log(auditEntry);
    console.log(res.body);

    const audit = await request(app.getHttpServer())
        .post('/user/' + userId + '/audit')
        .send(auditEntry);

    //get updated user
    const userWithAudit = await request(app.getHttpServer()).get('/user/' + userId);

    console.log(userWithAudit.body);

    //delete user and audit entry
    const userAfterDeleteAudit = await request(app.getHttpServer()).delete('/user/' + userId + '/audit/delete').send(userId);

    console.log(userAfterDeleteAudit.body);

    return request(app.getHttpServer()).delete('/user/delete/' + userId);
  });
});
