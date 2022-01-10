import {Prisma} from "@prisma/client";

export class UserUpdateDto {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
}