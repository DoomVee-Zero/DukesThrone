import {Injectable} from '@nestjs/common';
import { prisma } from '../../main';
import { User } from '../types/user.type';
import { Prisma } from '@prisma/client'
import {UserUpdateDto} from "./dto/user-update.dto";
import {UserCreateDto} from "./dto/user-create.dto";

@Injectable()
export class UserService {

  async getUser(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        id
      },
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

  async createUser(userCreateDto: UserCreateDto): Promise<User> {
    return prisma.user.create({
      data: userCreateDto,
      include: {
        audit: true,
        empire: true,
      },
    })
  }

  async updateUser(userUpdateDto: UserUpdateDto): Promise<User> {
    return prisma.user.update({
      where: {id: userUpdateDto.id },
      data: {
        username: userUpdateDto.username,
        id: String(userUpdateDto.id),
        password: userUpdateDto.password,
        mail: userUpdateDto.mail,
        audit: userUpdateDto.audit,
        empire: userUpdateDto.empire,
      },
      include: {
        audit: true,
        empire: true,
      },
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
