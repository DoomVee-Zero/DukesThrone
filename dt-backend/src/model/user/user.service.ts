import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma';
import { Empire } from '../types/empire.type';
import { User } from '../types/user.type';
import { Prisma } from '@prisma/client';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  async getUser(id: string): Promise<User> {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        audit: true,
        empire: true,
      },
    });
  }

  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany({
      include: {
        audit: true,
        empire: true,
      },
    });
  }

  async createUser(data: UserCreateDto): Promise<User> {
    return await prisma.user.create({
      data,
      include: {
        audit: true,
        empire: true,
      },
    });
  }

  async updateUser(userUpdateDto: UserUpdateDto): Promise<User> {
    return await prisma.user.update({
      where: { id: userUpdateDto.id },
      data: {
        id: userUpdateDto.id,
        username: userUpdateDto.username,
        password: userUpdateDto.password,
        mail: userUpdateDto.mail,
      },
      include: {
        audit: true,
        empire: true,
      },
    });
  }

  async deleteUser(id: string): Promise<User> {
    return await prisma.user.delete({
      where: { id: id },
      include: {
        audit: true,
        empire: true,
      },
    });
  }
}
