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

    assert((update.body.id = res.body.id));

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

    //create and add audit message
    const audit = await request(app.getHttpServer())
        .post('/user/' + res.body.id + '/audit',).send();

    //delete user
    request(app.getHttpServer()).delete('/user/delete/' + res.body.id);
  });
});
