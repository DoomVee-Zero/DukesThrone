import {Injectable} from '@nestjs/common';
import { prisma } from '../../main';
import { User } from '../types/user.type';
import { Prisma } from '@prisma/client'
import {UserUpdateDto} from "./dto/user-update.dto";

@Injectable()
export class UserService {

  async User(id: Prisma.UserWhereUniqueInput): Promise<User> {
    return prisma.user.findUnique({
      where: id,
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

  async updateUser(data: UserUpdateDto["data"], where: UserUpdateDto["where"]): Promise<User> {
    return prisma.user.update({
      data,
      where,
      include: {
        audit: true,
        empire: true,
      }
    })
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return prisma.user.delete({
      where,
      include: {
        audit: true,
        empire: true,
      },
    })
  }

}
