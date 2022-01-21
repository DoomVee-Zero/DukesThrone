import { Inject, Injectable } from '@nestjs/common';
import { prisma } from '../../prisma';
import { User } from '../types/user.type';
import { Prisma } from '@prisma/client';
import {UserCreateDto} from "./dto/user-create.dto";
import {UserUpdateDto} from "./dto/user-update.dto";
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {
  async User(id: string): Promise<User> {
    return prisma.user.findUnique({
      where: { id },
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

  async createUser(data: UserCreateDto): Promise<User> {
    return prisma.user.create({
      data,
      include: {
        audit: true,
        empire: true,
      },
    });
  }

  async updateUser(userUpdateDto: UserUpdateDto): Promise<User> {
    return prisma.user.update({
      where: userUpdateDto.id,
      data: userUpdateDto,
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
