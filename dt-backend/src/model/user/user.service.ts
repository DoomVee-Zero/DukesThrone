import { Injectable } from '@nestjs/common';
import { prisma } from '../../main';
import { User } from "../types/user.type";

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return prisma.user.findMany({
      include: {
        audit: true,
        empire: true
      }
    });
  }
}
