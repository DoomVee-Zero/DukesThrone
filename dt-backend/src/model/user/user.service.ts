import { Inject, Injectable } from '@nestjs/common';
import { prisma } from '../../prisma';
import { User } from '../types/user.type';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  async User(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    return prisma.user.findUnique({
      where: userWhereUniqueInput,
      include: {
        audit: true,
        empire: true,
      },
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
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { data, where } = params;
    return prisma.user.update({
      data,
      where,
      include: {
        audit: true,
        empire: true,
      },
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return prisma.user.delete({
      where,
      include: {
        audit: true,
        empire: true,
      },
    });
  }
}
