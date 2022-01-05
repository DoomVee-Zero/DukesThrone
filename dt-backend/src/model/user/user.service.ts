import {Body, Get, Injectable, Post} from '@nestjs/common';
import { prisma } from '../../main';
import { User } from '../types/user.type';
import {CreateUserDto} from "./dto/create-user.dto";
import {Prisma} from "@prisma/client";

@Injectable()
export class UserService {
  constructor(private readonly usersService: UserService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await prisma.user.create({
      data,
    });
  }

  async getUser(UID): Promise<User> {
    return await prisma.user.findUnique({where: {
        id: UID,
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
}
