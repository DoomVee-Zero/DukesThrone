import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';

@Injectable()
export class UserService {
  async getUsers() {
    return prisma.user.findMany();
  }
}
