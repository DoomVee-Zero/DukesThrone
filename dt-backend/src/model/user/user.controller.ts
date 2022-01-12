import {Controller, Get, Post, Delete, Patch, Body, Param} from "@nestjs/common";
import { User } from '../types/user.type'
import { UserService} from "./user.service";
import {UserCreateDto} from "./dto/user-create.dto";
import {UserUpdateDto} from "./dto/user-update.dto";
import { Prisma } from "@prisma/client"
import {UserDto} from "./dto/user.dto";
import {UserDeleteDto} from "./dto/user-delete.dto";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get(":id")
    async getUserById(@Param(':id') id: string) {
        return this.userService.getUser(id);
    }

    @Post('signup')
    async createUser (@Body() userCreateDto: UserCreateDto): Promise<User> {
        return this.userService.createUser(userCreateDto);
    }

    @Patch('update/:id')
    async updateUser(@Param('id') userUpdateDto: UserUpdateDto): Promise<User> {
        return this.userService.updateUser(userUpdateDto);
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') userDeleteDto: UserDeleteDto): Promise<User> {
        return this.userService.deleteUser(userDeleteDto);
    }

}