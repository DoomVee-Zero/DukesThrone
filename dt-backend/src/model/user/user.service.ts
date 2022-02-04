import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma';
import { User } from '../types/user.type';
import { AuditLog } from '../types/audit-log.type';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { AuditLogCreateDto } from './dto/audit-log-create.dto';
import { GetAuditLogDto } from './dto/get-audit-log.dto';

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
      where: { id },
      include: {
        audit: true,
        empire: true,
      },
    });
  }

  async createAuditEntry(
    auditLogCreateDto: AuditLogCreateDto,
    userId: string,
  ): Promise<AuditLog> {
    return prisma.auditLog.create({
      data: {
        user: {
          connect: {
             id: userId,
          },
        },
        ip: auditLogCreateDto.ip,
        time: auditLogCreateDto.time,
        client: auditLogCreateDto.client,
        i18nKey: auditLogCreateDto.i18nKey,
      },
    });
  }

  async getUserAuditLog(
    getAuditLogDto: GetAuditLogDto,
    userId: string,
  ): Promise<AuditLog[]> {
    const user = prisma.user.findUnique({
      where: { id: userId },
    });
    return user.audit({
      where: { id: userId },
    });
  }

  async getUserSingleAuditEntry(
    userId: string,
    auditId: string,
  ): Promise<AuditLog> {
   return prisma.auditLog.findUnique({
     where: {
         id: auditId
       }
   })
  }

  async deleteEntireAuditLog(userId: string): Promise<{count: number}> {
    return prisma.auditLog.deleteMany({
      where: {id: userId},
    });
  }
}
