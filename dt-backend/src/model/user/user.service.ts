import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { prisma } from '../../main';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }
}
