import {Injectable, Post} from '@nestjs/common';
import { prisma } from '../../main';
import { User } from '../types/user.type';
import { Prisma } from '@prisma/client'

@Injectable()
export class UserService {

  async getUser(): Promise<User> {
    return prisma.user.findUnique({
      where: {
        id
      },
      include: {
        audit: true,
        empire: true,
      }
    });
  }

  async getUsers(): Promise<User[]> {
    return prisma.user.findMany({
      include: {
        audit: true,
        empire: true,
      },
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({
      data,
      include: {
        audit: true,
        empire: true,
      },
    })
  }

}
